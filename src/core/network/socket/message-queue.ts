export type QueuedSocketMessage = string | ArrayBufferLike | Blob | ArrayBufferView;

export class MessageQueue {
  private queue: QueuedSocketMessage[] = [];
  private maxQueueSize: number;

  constructor(maxQueueSize = 1000) {
    this.maxQueueSize = maxQueueSize;
  }

  public enqueue(message: QueuedSocketMessage): boolean {
    if (this.queue.length >= this.maxQueueSize) {
      this.queue.shift(); // Drop oldest message to prevent unbound memory leak
    }
    this.queue.push(message);
    return true;
  }

  public flush(sendFn: (message: QueuedSocketMessage) => void): number {
    let sentCount = 0;
    while (this.queue.length > 0) {
      const msg = this.queue.shift();
      if (msg) {
        sendFn(msg);
        sentCount++;
      }
    }
    return sentCount;
  }

  public clear(): void {
    this.queue = [];
  }

  public get size(): number {
    return this.queue.length;
  }
}
