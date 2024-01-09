export default function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) throw new Error('Cannot process');
  for (const [key, value] of inputMap.entries()) {
    if (value === 1) inputMap.set(key, 100);
  }
  return inputMap;
}
