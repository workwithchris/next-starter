import type { SSEMessage } from "./types";

export interface SSEParserState {
  currentEvent: string;
  currentData: string;
  currentId?: string;
  currentRetry?: number;
}

export function createInitialParserState(): SSEParserState {
  return {
    currentEvent: "message",
    currentData: "",
    currentId: undefined,
    currentRetry: undefined,
  };
}

/**
 * Parses a single line of an SSE text stream and returns an SSEMessage if a message boundary is reached
 */
export function parseSSELine(
  line: string,
  state: SSEParserState
): { message: SSEMessage | null; nextState: SSEParserState } {
  const next = { ...state };

  if (line === "") {
    if (next.currentData) {
      const trimmedData = next.currentData.endsWith("\n")
        ? next.currentData.slice(0, -1)
        : next.currentData;

      let parsedData: unknown = trimmedData;
      try {
        parsedData = JSON.parse(trimmedData);
      } catch {
        // Leave as string
      }

      const message: SSEMessage = {
        id: next.currentId,
        event: next.currentEvent,
        data: parsedData,
        retry: next.currentRetry,
      };

      return {
        message,
        nextState: createInitialParserState(),
      };
    }
    return { message: null, nextState: next };
  }

  if (line.startsWith(":")) {
    // Comment / heartbeat frame
    return { message: null, nextState: next };
  }

  if (line.startsWith("event:")) {
    next.currentEvent = line.slice(6).trim();
  } else if (line.startsWith("data:")) {
    next.currentData += line.slice(5).trim() + "\n";
  } else if (line.startsWith("id:")) {
    next.currentId = line.slice(3).trim();
  } else if (line.startsWith("retry:")) {
    const val = parseInt(line.slice(6).trim(), 10);
    if (!isNaN(val)) next.currentRetry = val;
  }

  return { message: null, nextState: next };
}
