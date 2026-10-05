export const BANNER_ROTATE_MS = 5 * 1000;

export function bannerSlot(now = Date.now()) {
  return Math.floor(now / BANNER_ROTATE_MS);
}
