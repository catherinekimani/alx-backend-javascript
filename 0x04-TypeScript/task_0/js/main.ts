interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Jason",
	lastName: "Maina",
	age: 27,
	location: "France",
};

const student2: Student = {
	firstName: "Kay",
	lastName: "Kruz",
	age: 24,
	location: "Nairobi",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);
