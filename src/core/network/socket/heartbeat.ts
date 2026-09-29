export class HeartbeatManager {
  private timer: NodeJS.Timeout | null = null;
  private intervalMs: number;
  private message: string | object;
  private sendFn: (msg: string | object) => void;

  constructor(
    intervalMs: number,
    message: string | object,
    sendFn: (msg: string | object) => void
  ) {
    this.intervalMs = intervalMs;
    this.message = message;
    this.sendFn = sendFn;
  }

  public start(): void {
    this.stop();
    this.timer = setInterval(() => {
      this.sendFn(this.message);
    }, this.intervalMs);
  }

  public stop(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  public get isActive(): boolean {
    return this.timer !== null;
  }
}
