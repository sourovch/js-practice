// adding students
const students = require('./students');

// printing grades
printGrade(students);

// function definations
function printGrade(students = []) {
  const aPlusArr = [];
  const aArr = [];
  const bArr = [];
  const otherArr = [];

  for (let student of students) {
    const grade = calcGrade(student);

    switch (grade) {
      case 'F':
        // students = students.filter(
        //   (i) => Number(i.roll) != Number(student.roll)
        // );
        console.log(`${student.name} is delated`);
        break;
      case 'A+':
        aPlusArr.push(student.name);
        break;
      case 'A':
        aArr.push(student.name);
        break;
      case 'B':
        bArr.push(student.name);
      default:
        otherArr.push(student.name);
    }
  }

  aPlusArr.length > 0 && console.log(`A+ = ${aPlusArr.join(',')}`);
  aArr.length > 0 && console.log(`A = ${aArr.join(',')}`);
  bArr.length > 0 && console.log(`B = ${bArr.join(',')}`);
  otherArr.length > 0 &&
    console.log(`other grade = ${otherArr.join(',')}`);
}

function calcGrade(student = {}) {
  const subs = ['bangla', 'math', 'english', 'rs', 'science'];
  let totMarks = 0;

  for (let sub of subs) {
    const marks = student.marks[sub];
    if (marks < 33) return 'F';

    totMarks += marks;
  }

  const avgMarks = totMarks / subs.length;

  if (avgMarks > 79 && avgMarks <= 100) return 'A+';
  if (avgMarks > 69 && avgMarks <= 79) return 'A';
  if (avgMarks > 59 && avgMarks <= 69) return 'B';

  return 'O';
}
