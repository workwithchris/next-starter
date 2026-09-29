"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { SSEClient, type SSEClientOptions, type SSEMessage } from "../sse";

export interface UseSSEResult<T = any> {
  data: T | null;
  lastMessage: SSEMessage<T> | null;
  messages: SSEMessage<T>[];
  isConnected: boolean;
  error: unknown | null;
  restart: () => void;
  close: () => void;
}

export function useSSE<T = any>(
  url: string | null | undefined,
  options: SSEClientOptions = {}
): UseSSEResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [lastMessage, setLastMessage] = useState<SSEMessage<T> | null>(null);
  const [messages, setMessages] = useState<SSEMessage<T>[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const clientRef = useRef<SSEClient | null>(null);
  const optionsRef = useRef(options);
  optionsRef.current = options;

  const close = useCallback(() => {
    if (clientRef.current) {
      clientRef.current.close();
      clientRef.current = null;
      setIsConnected(false);
    }
  }, []);

  const connect = useCallback(() => {
    if (!url) return;
    close();

    const client = new SSEClient(url, {
      ...optionsRef.current,
      onOpen: (res) => {
        setIsConnected(true);
        setError(null);
        optionsRef.current.onOpen?.(res);
      },
      onMessage: (msg) => {
        setData(msg.data);
        setLastMessage(msg);
        setMessages((prev) => [...prev, msg]);
        optionsRef.current.onMessage?.(msg);
      },
      onError: (err) => {
        setError(err);
        optionsRef.current.onError?.(err);
      },
      onClose: () => {
        setIsConnected(false);
        optionsRef.current.onClose?.();
      },
    });

    clientRef.current = client;
    client.connect();
  }, [url, close]);

  useEffect(() => {
    if (url) {
      connect();
    }
    return () => {
      close();
    };
  }, [url, connect, close]);

  return {
    data,
    lastMessage,
    messages,
    isConnected,
    error,
    restart: connect,
    close,
  };
}
