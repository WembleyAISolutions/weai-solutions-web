/**
 * Best-effort, in-memory sliding-window rate limiter (per process instance; no
 * shared store exists in this repo). A hit is recorded only for requests that are
 * allowed through, so a rejected burst cannot extend its own lockout. The key map
 * is capped: when it exceeds `maxKeys`, the oldest key is evicted.
 */
export interface RateLimiterOptions {
  windowMs: number;
  max: number;
  maxKeys?: number;
  now?: () => number;
}

export interface RateLimiter {
  /** Returns true when the request is allowed (and records it), false when rejected. */
  allow(key: string): boolean;
  /** Current recorded hits inside the window for a key (for tests / inspection). */
  count(key: string): number;
  size(): number;
}

export function createRateLimiter({ windowMs, max, maxKeys = 1000, now = Date.now }: RateLimiterOptions): RateLimiter {
  // Map preserves insertion order; re-inserting on each allowed hit keeps the most
  // recently active keys at the end, so the first key is the oldest.
  const hits = new Map<string, number[]>();

  function recentFor(key: string, t: number): number[] {
    return (hits.get(key) ?? []).filter((ts) => t - ts < windowMs);
  }

  return {
    allow(key) {
      const t = now();
      const recent = recentFor(key, t);
      if (recent.length >= max) {
        // Rejected: do not record the hit. Store the pruned window only.
        if (recent.length !== hits.get(key)?.length) hits.set(key, recent);
        return false;
      }
      recent.push(t);
      hits.delete(key);
      hits.set(key, recent);
      while (hits.size > maxKeys) {
        const oldest = hits.keys().next().value;
        if (oldest === undefined) break;
        hits.delete(oldest);
      }
      return true;
    },
    count(key) {
      return recentFor(key, now()).length;
    },
    size() {
      return hits.size;
    },
  };
}
