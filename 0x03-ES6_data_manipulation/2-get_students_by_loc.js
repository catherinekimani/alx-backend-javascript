export default function getStudentsByLocation(studentList, city) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  const studentsInCity = studentList.filter((student) => student.location === city);
  return studentsInCity;
}
