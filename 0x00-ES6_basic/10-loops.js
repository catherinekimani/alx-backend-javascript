export default function appendToEachArrayValue(array, appendString) {
  const myArr = [];
  for (const idx of array) {
    myArr.push(appendString + idx);
  }
  return myArr;
}
