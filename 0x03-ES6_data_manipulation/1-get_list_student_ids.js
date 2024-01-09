export default function getListStudentIds(arrOfObjs) {
  if (!Array.isArray(arrOfObjs)) {
    return [];
  }
  const idArr = arrOfObjs.map((student) => student.id);
  return idArr;
}
