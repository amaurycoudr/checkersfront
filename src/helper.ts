export function capitalizeFirstLetter(s?: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}
