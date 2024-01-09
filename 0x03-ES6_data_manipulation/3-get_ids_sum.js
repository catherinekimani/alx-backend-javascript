export default function getStudentIdsSum(arrOfObjs) {
  if (!Array.isArray(arrOfObjs)) {
    return [];
  }
  const totalIdSum = arrOfObjs.reduce((sum, studentObj) => sum + studentObj.id, 0);
  return totalIdSum;
}
