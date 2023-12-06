interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: "Joseph",
  lastName: "Ani",
  age: 22,
  location: "LAGOS",
};

const studentTwo: Student = {
  firstName: "Mary",
  lastName: "Slesor",
  age: 39,
  location: "LONDON",
};



const studentsList: Array<Student> = [studentOne, studentTwo];

const table = document.getElementById('studentTable') as HTMLTableElement;

studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.lastName;
})

