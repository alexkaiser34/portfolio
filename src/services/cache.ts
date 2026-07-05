const cache = new Map<string, Promise<unknown>>();

/**
 * Memoize an async loader by key for the lifetime of the page, so shared
 * content (e.g. the profile used across several components) is fetched once.
 * A failed load is evicted so it can be retried.
 */
export function cached<T>(key: string, loader: () => Promise<T>): Promise<T> {
  if (!cache.has(key)) {
    cache.set(
      key,
      loader().catch((err) => {
        cache.delete(key);
        throw err;
      })
    );
  }
  return cache.get(key) as Promise<T>;
}
