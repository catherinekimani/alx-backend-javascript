export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const int8Array = new Int8Array(length);
  int8Array.fill(value, position, position + 1);
  return new DataView(int8Array.buffer);
}
