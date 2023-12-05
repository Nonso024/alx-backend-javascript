export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce((sum, stdent) => sum + stdent.id, 0);
}
