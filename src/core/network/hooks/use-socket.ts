"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { SocketClient, type SocketClientOptions, type SocketStatus } from "../socket";

export interface UseSocketResult {
  status: SocketStatus;
  isConnected: boolean;
  send: (data: string | object | ArrayBufferLike | Blob | ArrayBufferView) => void;
  emit: <T = unknown>(event: string, data?: T) => void;
  lastMessage: unknown;
  error: Event | null;
  disconnect: () => void;
  reconnect: () => void;
  client: SocketClient | null;
}

export function useSocket(
  url: string | null | undefined,
  options: SocketClientOptions = {}
): UseSocketResult {
  const [status, setStatus] = useState<SocketStatus>("CLOSED");
  const [lastMessage, setLastMessage] = useState<unknown>(null);
  const [error, setError] = useState<Event | null>(null);
  const [client, setClient] = useState<SocketClient | null>(null);

  const clientRef = useRef<SocketClient | null>(null);
  const optionsRef = useRef(options);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  const disconnect = useCallback(() => {
    if (clientRef.current) {
      clientRef.current.disconnect();
      clientRef.current = null;
      setClient(null);
      setStatus("CLOSED");
    }
  }, []);

  const connect = useCallback(() => {
    if (!url) return;
    disconnect();

    const socketInstance = new SocketClient(url, {
      ...optionsRef.current,
      autoConnect: true,
      onOpen: (event) => {
        setStatus("OPEN");
        setError(null);
        optionsRef.current.onOpen?.(event);
      },
      onClose: (event) => {
        setStatus("CLOSED");
        optionsRef.current.onClose?.(event);
      },
      onError: (event) => {
        setError(event);
        optionsRef.current.onError?.(event);
      },
      onMessage: (data, rawEvent) => {
        setLastMessage(data);
        optionsRef.current.onMessage?.(data, rawEvent);
      },
    });

    socketInstance.on("reconnecting", () => setStatus("CONNECTING"));
    clientRef.current = socketInstance;
    setClient(socketInstance);
    setStatus("CONNECTING");
  }, [url, disconnect]);

  useEffect(() => {
    if (url) {
      connect();
    }
    return () => {
      disconnect();
    };
  }, [url, connect, disconnect]);

  const send = useCallback((data: string | object | ArrayBufferLike | Blob | ArrayBufferView) => {
    clientRef.current?.send(data);
  }, []);

  const emit = useCallback(<T = unknown>(event: string, data?: T) => {
    clientRef.current?.emit(event, data);
  }, []);

  return {
    status,
    isConnected: status === "OPEN",
    send,
    emit,
    lastMessage,
    error,
    disconnect,
    reconnect: connect,
    client,
  };
}
