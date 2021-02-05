// Write a function to create a user object from the arguments given.
let classBtech = {
  class: 'class A',
  teacherName: 'Sindu',
  students: [
    {
      name: 'Akhil',
      id: 105,
      marks: [
        { subject: 'English', mark: 45 },
        { subject: 'Maths', mark: 96 },
        { subject: 'Physics', mark: 68 }
      ]
    },
    {
      name: 'Armaan',
      id: 106,
      marks: [
        { subject: 'English', mark: 63 },
        { subject: 'Maths', mark: 70 },
        { subject: 'Physics', mark: 96 }
      ]
    },
    {
      name: 'Aju',
      id: 107,
      marks: [
        { subject: 'English', mark: 80 },
        { subject: 'Maths', mark: 92 },
        { subject: 'Physics', mark: 61 }
      ]
    }
  ]
}

// 1. Add student with name and ID
const addStudent = (studentName, studentID) => {
  let studentObject = {
    name: studentName,
    id: studentID
  }
  classBtech.students.push(studentObject);
  return classBtech.students;
}

// 2. Enter Mark for a student
const addMark = (subjectName, subjectMark, studentID) => {
  let markObject = {
    subject: subjectName,
    mark: subjectMark
  }
  let index = classBtech.students.findIndex(name => name.id === studentID);
  classBtech.students[index].marks.push(markObject);
  return classBtech.students[index].marks;
}

// 3. Enter mark for a subject for multiple students
const addMarksForAsubject = () => {
  let subject = ['computer'];
  let marks = [67, 48];
  let studentIDs = [105, 106];
  for (let j = 0; j < studentIDs.length; j++) {
    addMarkforMultipleStudents(subject[j * 0], marks[j], studentIDs[j]);
  }
}

// Function to add marks for multiple students
const addMarkforMultipleStudents = (subjectName, subjectMark, studentID) => {
  let markObject = {
    subject: subjectName,
    mark: subjectMark
  }
  let index = classBtech.students.findIndex(student => student.id === parseInt(studentID));
  if (classBtech.students[index].id === studentID) {
    classBtech.students[index].marks.push(markObject);
    console.log(classBtech.students[index]);
  }
}

// 4. Edit mark for a particular subject of a student
const editMark = (subjectName, mark, studentID) => {
  let studentIndex = classBtech.students.findIndex(name => name.id = studentID);
  let marksIndex = classBtech.students[studentIndex].marks.findIndex(mark => mark.subject === subjectName);
  classBtech.students[studentIndex].marks[marksIndex].mark = mark;
  return classBtech.students[studentIndex].marks[marksIndex];
}

// 5. Change the class teacher of a class
const changeClassTeacher = (className, teacher) => {
  if (classBtech.class === className) {
    classBtech.teacherName = teacher;
  }
  return classBtech;
}

// 6. Remove a student from a class
const removeStudent = (studentID) => {
  for (let i = 0; i < classBtech.students.length; i++) {
    if (classBtech.students[i].id === parseInt(studentID)) {
      classBtech.students.splice(i, 1);
    }
  }
  return classBtech;
}

// 7. Delete a subject entry from every students
const deleteSubjectEntry = (subjectName) => {
  let filteredArray = [];
  for (let i = 0; i < classBtech.students.length; i++) {
    for (let j = 0; j < classBtech.students[i].marks.length; j++) {
      if (classBtech.students[i].marks[j].subject === subjectName) {
        filteredArray = classBtech.students[i].marks.filter(filtered => filtered.subject !== subjectName);
        classBtech.students[i].marks = filteredArray;
      }
    }
    console.log(classBtech.students[i]);
  }
}

// 8.  Find the topper of a class given a subject
const topperOfAclass = (subjectName) => {
  let marksArray = [];
  for (let i = 0; i < classBtech.students.length; i++) {
    for (let j = 0; j < classBtech.students[i].marks.length; j++) {
      if (classBtech.students[i].marks[j].subject === subjectName) {
        marksArray.push(classBtech.students[i].marks[j].mark);
      }
    }
  }
  const maxMark = Math.max(...marksArray);
  let topperId = [];
  let topperName = [];
  for (let k = 0; k < classBtech.students.length; k++) {
    for (let l = 0; l < classBtech.students[k].marks.length; l++) {
      if (classBtech.students[k].marks[l].subject === subjectName && classBtech.students[k].marks[l].mark === parseInt(maxMark)) {
        topperId.push(classBtech.students[k].id);
        topperName.push(classBtech.students[k].name);
        console.log('ID :', topperId.join(''));
        console.log('Name :', topperName.join(''));
        console.log('Mark :', maxMark);
      }
    }
  }
}

// 9. Find the average mark for a given subject
let sum = 0;
let count = 0;
const averageOfGivenSubject = (subjectName) => {
  for (let i = 0; i < classBtech.students.length; i++) {
    for (let j = 0; j < classBtech.students[i].marks.length; j++) {
      if (classBtech.students[i].marks[j].subject === subjectName) {
        sum = parseInt(sum) + classBtech.students[i].marks[j].mark;
        count++;
      }
    }
  }
  let average = (sum) / (parseInt(count));
  return Math.round(average);
}

// 10. Sort and display the list of students in any order - ordered by name, mark etc 
// a. Sort by Name
classBtech.students.sort(sortByStudentName = (a, b) => {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}
);

// b. Sort by mark
const sortByMark = (subjectName) => {
  let sortedStudentArray = [];
  let marksArray = [];
  // to find the marks of the subject
  for (let i = 0; i < classBtech.students.length; i++) {
    for (let j = 0; j < classBtech.students[i].marks.length; j++) {
      if (classBtech.students[i].marks[j].subject === subjectName) {
        marksArray.push(classBtech.students[i].marks[j].mark);
      }
    }
  }
  // sort function to sort mark in descending order
  marksArray.sort(sortBySubjectMark = (a, b) => {
    return b - a;
  }
  );
  // calling sort by name function for each value of the mark
  for (let k = 0; k < marksArray.length; k++) {
    sortedStudentArray.push(sortByName(marksArray[k], subjectName));
  }
  console.log(sortedStudentArray);
}

// This function will find out the student name equallent to the sorted mark and subject
const sortByName = (subjectMark, subject) => {
  for (let i = 0; i < classBtech.students.length; i++) {
    for (let j = 0; j < classBtech.students[i].marks.length; j++) {
      if (classBtech.students[i].marks[j].mark === subjectMark && classBtech.students[i].marks[j].subject === subject) {
        return classBtech.students[i];
      }
    }
  }
}

console.log(addStudent('Arjun', 108));
console.log(addMark('computer', 65, 105));
addMarksForAsubject();
console.log(editMark('English', 97, 106));
console.log(changeClassTeacher('class A', 'Aswathy'));
console.log(removeStudent(106));
deleteSubjectEntry('Physics');
topperOfAclass('Maths');
console.log(averageOfGivenSubject('English'));
console.log('Sort by Name', classBtech.students);
sortByMark('Maths');




