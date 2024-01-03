export default function iterateThroughObject(reportWithIterator) {
  const myStr = [];
  for (const report of reportWithIterator) {
    myStr.push(report);
  }
  return myStr.join(' | ');
}
