import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { serverEnv } from './env';

const redis = new Redis({
  url: serverEnv.UPSTASH_REDIS_REST_URL,
  token: serverEnv.UPSTASH_REDIS_REST_TOKEN,
});

/** Short-burst protection: caps rapid-fire requests from a single IP. */
const perMinute = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(8, '1 m'),
  prefix: 'chat:min',
  analytics: false,
});

/** Daily budget guard: caps total requests from a single IP per day. */
const perDay = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, '1 d'),
  prefix: 'chat:day',
  analytics: false,
});

/**
 * Rate limit a request by identifier (typically the client IP). Both the
 * per-minute and per-day windows must pass.
 */
export async function checkRateLimit(identifier: string): Promise<{ success: boolean }> {
  const [minute, day] = await Promise.all([
    perMinute.limit(identifier),
    perDay.limit(identifier),
  ]);
  return { success: minute.success && day.success };
}
