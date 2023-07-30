export function getRandomBrightColor() {
  const randomHue = Math.floor(Math.random() * 360); // Random hue value between 0 and 359
  const saturation = '100%'; // Fixed saturation value for bright colors
  const lightness = '50%'; // Fixed lightness value for bright colors
  return `hsl(${randomHue}, ${saturation}, ${lightness})`;
}