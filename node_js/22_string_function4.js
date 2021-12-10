// 학생별로 상담일자가 무작위로 나오는 화살표 함수
const studentList = [
  { name: 'Chris', kor: 80, eng: 70, mat: 58 },
  { name: 'Ryan', kor: 90, eng: 90, mat: 68 },
  { name: 'David', kor: 60, eng: 80, mat: 88 },
  { name: 'Paul', kor: 50, eng: 60, mat: 98 },
  { name: 'Bailey', kor: 100, eng: 20, mat: 48 }
];
console.log(studentList[0]);

const newStudent = { name: 'John', kor: 75, eng: 84, mat: 54 };
studentList.push(newStudent); // 새로운 배열 객체를 마지막 배열 위치에 추가
console.log(studentList);
studentList.pop(); // 마지막 배열 객체를 삭제
console.log(studentList);

studentList.unshift(newStudent);
console.log(studentList);

studentList.shift();
console.log(studentList);

