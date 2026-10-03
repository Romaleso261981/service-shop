export const IMAGE_SIZES = [
  { width: 740, height: 600 },
  { width: 740, height: 400 },
  { width: 400, height: 285 },
  { width: 400, height: 286 },
  { width: 570, height: 295 },
  { width: 571, height: 295 },
  { width: 1170, height: 293 },
  { width: 1170, height: 164 },
];

export function variantName(filename, width, height) {
  const base = String(filename || "").replace(/\.[^.]+$/, "");
  return `${base}-${width}x${height}.webp`;
}

export function variantPath(filename, width, height) {
  return `/assets/images/${variantName(filename, width, height)}`;
}

export function isVariantName(filename) {
  return /-\d+x\d+\.webp$/i.test(filename || "");
}
