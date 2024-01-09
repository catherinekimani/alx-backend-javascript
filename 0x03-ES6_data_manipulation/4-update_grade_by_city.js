export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(({ location }) => location === city)
    .map((obj) => {
      const sNewGrade = newGrades.filter(({ studentId }) => studentId === obj.id);
      const { grade = 'N/A' } = sNewGrade.length > 0 ? sNewGrade[0] : {};
      return { ...obj, grade };
    });
}
