import { test } from "node:test";
import assert from "node:assert/strict";
import { createRateLimiter } from "./rate-limit.ts";

test("allows N, rejects N+1..N+k, and rejected attempts are not recorded", () => {
  let clock = 1_000;
  const N = 5;
  const rl = createRateLimiter({ windowMs: 60_000, max: N, now: () => clock });

  for (let i = 0; i < N; i++) assert.equal(rl.allow("ip-a"), true, `request ${i + 1} allowed`);
  for (let i = 0; i < 7; i++) {
    clock += 100;
    assert.equal(rl.allow("ip-a"), false, `request ${N + i + 1} rejected`);
  }
  assert.equal(rl.count("ip-a"), N, "rejected attempts must not extend the window");

  // Once the first N hits leave the window the key is allowed again, even though
  // rejected attempts happened more recently.
  clock = 1_000 + 60_000;
  assert.equal(rl.allow("ip-a"), true);
  assert.equal(rl.count("ip-a"), 1);
});

test("other keys are independent", () => {
  const rl = createRateLimiter({ windowMs: 60_000, max: 1, now: () => 0 });
  assert.equal(rl.allow("a"), true);
  assert.equal(rl.allow("a"), false);
  assert.equal(rl.allow("b"), true);
});

test("key map is capped and evicts the oldest key", () => {
  const rl = createRateLimiter({ windowMs: 60_000, max: 1, maxKeys: 3, now: () => 0 });
  for (const k of ["k1", "k2", "k3"]) rl.allow(k);
  assert.equal(rl.size(), 3);
  rl.allow("k4");
  assert.equal(rl.size(), 3);
  assert.equal(rl.count("k1"), 0, "oldest key evicted");
  assert.equal(rl.count("k4"), 1);
  // An evicted key is allowed again (best-effort limiter).
  assert.equal(rl.allow("k1"), true);
  assert.equal(rl.size(), 3);
});
