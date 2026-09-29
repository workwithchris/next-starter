import { describe, expect, it } from "vitest";
import { createInitialParserState, parseSSELine } from "../sse/sse-parser";

describe("sse-parser", () => {
  it("initializes with default message event", () => {
    const state = createInitialParserState();
    expect(state.currentEvent).toBe("message");
    expect(state.currentData).toBe("");
  });

  it("ignores comment lines starting with ':'", () => {
    const state = createInitialParserState();
    const { message, nextState } = parseSSELine(":ping", state);
    expect(message).toBeNull();
    expect(nextState).toEqual(state);
  });

  it("accumulates event and data lines", () => {
    let state = createInitialParserState();

    const line1 = parseSSELine("event: notification", state);
    state = line1.nextState;
    expect(state.currentEvent).toBe("notification");

    const line2 = parseSSELine("data: hello world", state);
    state = line2.nextState;
    expect(state.currentData).toBe("hello world\n");

    const line3 = parseSSELine("id: evt-42", state);
    state = line3.nextState;
    expect(state.currentId).toBe("evt-42");

    // Empty line triggers message dispatch
    const end = parseSSELine("", state);
    expect(end.message).toEqual({
      id: "evt-42",
      event: "notification",
      data: "hello world",
      retry: undefined,
    });
    // Next state resets
    expect(end.nextState.currentEvent).toBe("message");
    expect(end.nextState.currentData).toBe("");
  });

  it("parses JSON data payloads automatically", () => {
    let state = createInitialParserState();
    state = parseSSELine('data: {"count":42,"active":true}', state).nextState;
    const end = parseSSELine("", state);

    expect(end.message?.data).toEqual({ count: 42, active: true });
  });

  it("parses retry parameter", () => {
    let state = createInitialParserState();
    state = parseSSELine("retry: 5000", state).nextState;
    state = parseSSELine("data: ping", state).nextState;
    const end = parseSSELine("", state);

    expect(end.message?.retry).toBe(5000);
  });
});
