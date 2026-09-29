import { describe, expect, it, vi } from "vitest";
import { HeartbeatManager } from "../socket/heartbeat";
import { MessageQueue } from "../socket/message-queue";
import { calculateReconnectDelay, shouldAttemptReconnect } from "../socket/reconnect";
import { createSocketClient, SocketClient } from "../socket/socket-client";

describe("WebSocket client suite", () => {
  describe("MessageQueue", () => {
    it("enqueues and flushes messages", () => {
      const queue = new MessageQueue();
      queue.enqueue("msg 1");
      queue.enqueue("msg 2");

      expect(queue.size).toBe(2);

      const flushed: unknown[] = [];
      const count = queue.flush((msg) => flushed.push(msg));

      expect(count).toBe(2);
      expect(flushed).toEqual(["msg 1", "msg 2"]);
      expect(queue.size).toBe(0);
    });

    it("drops oldest message when capacity is exceeded", () => {
      const queue = new MessageQueue(2);
      queue.enqueue("first");
      queue.enqueue("second");
      queue.enqueue("third");

      const flushed: unknown[] = [];
      queue.flush((msg) => flushed.push(msg));

      expect(flushed).toEqual(["second", "third"]);
    });
  });

  describe("HeartbeatManager", () => {
    it("starts and stops interval timer", () => {
      vi.useFakeTimers();
      const sendMock = vi.fn();
      const heartbeat = new HeartbeatManager(1000, "ping", sendMock);

      heartbeat.start();
      expect(heartbeat.isActive).toBe(true);

      vi.advanceTimersByTime(2500);
      expect(sendMock).toHaveBeenCalledTimes(2);
      expect(sendMock).toHaveBeenCalledWith("ping");

      heartbeat.stop();
      expect(heartbeat.isActive).toBe(false);

      vi.advanceTimersByTime(2000);
      expect(sendMock).toHaveBeenCalledTimes(2);

      vi.useRealTimers();
    });
  });

  describe("reconnect helpers", () => {
    it("calculates exponential backoff capped by maxDelayMs", () => {
      expect(calculateReconnectDelay(1, 1000, 2, 10000)).toBe(1000);
      expect(calculateReconnectDelay(2, 1000, 2, 10000)).toBe(2000);
      expect(calculateReconnectDelay(3, 1000, 2, 10000)).toBe(4000);
      expect(calculateReconnectDelay(10, 1000, 2, 10000)).toBe(10000); // Capped at maxDelay
    });

    it("evaluates shouldAttemptReconnect properly", () => {
      expect(shouldAttemptReconnect(2, 5, false)).toBe(true);
      expect(shouldAttemptReconnect(5, 5, false)).toBe(false);
      expect(shouldAttemptReconnect(1, 5, true)).toBe(false); // Closed intentionally
    });
  });

  describe("SocketClient class", () => {
    it("instantiates in CLOSED status in node environment", () => {
      const client = new SocketClient("wss://api.example.com/ws", { autoConnect: false });
      expect(client.status).toBe("CLOSED");
      expect(client.isConnected).toBe(false);
    });

    it("registers and triggers event listeners", () => {
      const client = new SocketClient("wss://api.example.com/ws", { autoConnect: false });
      const handler = vi.fn();

      const unsubscribe = client.on("user_joined", handler);

      // Simulate internal event dispatch
      (client as unknown as { dispatchInternalEvent: (event: string, payload: unknown) => void })
        .dispatchInternalEvent("user_joined", { id: "user_1" });
      expect(handler).toHaveBeenCalledWith({ id: "user_1" }, expect.any(Object));

      unsubscribe();
      (client as unknown as { dispatchInternalEvent: (event: string, payload: unknown) => void })
        .dispatchInternalEvent("user_joined", { id: "user_2" });
      expect(handler).toHaveBeenCalledTimes(1);
    });

    it("factory createSocketClient instantiates properly", () => {
      const client = createSocketClient("wss://api.example.com/ws", { autoConnect: false });
      expect(client).toBeInstanceOf(SocketClient);
    });
  });
});
