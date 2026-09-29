export function calculateReconnectDelay(
  attempt: number,
  baseIntervalMs = 2000,
  backoffFactor = 1.5,
  maxDelayMs = 30000
): number {
  const calculated = baseIntervalMs * Math.pow(backoffFactor, attempt - 1);
  return Math.min(calculated, maxDelayMs);
}

export function shouldAttemptReconnect(
  attempt: number,
  maxAttempts = 10,
  isIntentionallyClosed = false
): boolean {
  if (isIntentionallyClosed) return false;
  return attempt < maxAttempts;
}
