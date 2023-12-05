export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents.filter((student) => student.location === city)
    .map((student) => {
      for (const newGrade of newGrades) {
        if (student.id === newGrade.student) {
          return { ...student, grade: newGrade.grade };
        }
      }
      return { ...student, grade: 'N/A' };
    });
}
