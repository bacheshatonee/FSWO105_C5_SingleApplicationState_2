const arr = ['Bill', 'Joe', 'Emily', 'Andrea']
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

function addNewStudent2(array, newArray) {
  array.push(...newArray);
}

function addNewStudent(array, newArray) {
  for(let i = 0; i < newArray.length; i++) {
    array.push(newArray[i]);
  }
}

console.log(arr);
addNewStudent2(arr, newStudents);
console.log(arr);
