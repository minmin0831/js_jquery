const nums = [23, 75, 80, 63, 15];
const strs = ["Dog", "Cat", "Fish", "Hamster", "Parrot"];

const sortNums = nums.sort();
console.log("오름차순 (acending) 정렬 : ", sortNums); // acending (default) 순서로 sorting 한다. (작은 수에서 큰 수로)
console.log("내림차순 (descending) 정렬 : ", sortNums.reverse()); // ascending으로 정렬하고 reverse 함수를 사용하면 된다. 

const sortStrs = strs.sort();
console.log(sortStrs);



const studentList = [
  { name: 'Chris', kor: 80, eng: 70, mat: 58 },
  { name: 'Ryan', kor: 90, eng: 90, mat: 68 },
  { name: 'David', kor: 60, eng: 80, mat: 88 },
  { name: 'Paul', kor: 50, eng: 60, mat: 98 },
  { name: 'Bailey', kor: 100, eng: 20, mat: 48 }
];

const sortStudentList = studentList.sort();
console.log(sortStudentList);
// 기준이 없어서 sort 안됨. 


studentList.sort((beforeStudent, nextStudent) => {
  if (beforeStudent.kor > nextStudent.kor) return 1;
  else if(beforeStudent.kor < nextStudent.kor) return -1;
  return 0;
});
console.log(studentList);

studentList.sort((beforeStudent, nextStudent) => {
  if (beforeStudent.kor > nextStudent.kor) return -1;
  else if(beforeStudent.kor < nextStudent.kor) return 1;
  return 0;
});
console.log(studentList);

const studentList2 = [
  { name: 'Chris', kor: 80, eng: 70, mat: 58 },
  { name: 'Ryan', kor: 80, eng: 90, mat: 68 },
  { name: 'David', kor: 80, eng: 80, mat: 88 },
  { name: 'Paul', kor: 50, eng: 60, mat: 98 },
  { name: 'Bailey', kor: 100, eng: 20, mat: 48 }
];

studentList2.sort((beforeStudent, nextStudent) => {
  if (beforeStudent.kor > nextStudent.kor) return 1;
  else if(beforeStudent.kor < nextStudent.kor) return -1;
  else if(beforeStudent.eng > nextStudent.eng) return -1;
  else if(beforeStudent.eng < nextStudent.eng) return 1;
  return 0;
});
console.log(studentList2);