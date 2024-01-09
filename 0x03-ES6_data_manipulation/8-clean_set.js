export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return Array.from(set)
    .filter((element) => element && element.startsWith(startString))
    .map((element) => element.replace(startString, ''))
    .join('-');
}
