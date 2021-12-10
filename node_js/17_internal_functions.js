const ran = Math.random() * 20;
console.log(ran);

// 주사위 값이 무작위로 나오는 화살표 함수
const dice = () => {
  // return Math.round(Math.random() * 5 + 1);
  return Math.floor(Math.random() * 6 + 1);
}

console.log('주사위 값 = ', dice());

// 상담일자가 무작위로 나오는 화살표 함수
const con = (start, end) => Math.round(Math.random() * (end - start)) + start;
console.log(`상담일자는 ${con(10, 20)}일 입니다.`);


// 학생별로 상담일자가 무작위로 나오는 화살표 함수
const studentList = [
  { name: 'Chris', kor: 80, eng: 70, mat: 58 },
  { name: 'Ryan', kor: 90, eng: 90, mat: 68 },
  { name: 'David', kor: 60, eng: 80, mat: 88 },
  { name: 'Paul', kor: 50, eng: 60, mat: 98 },
  { name: 'Bailey', kor: 100, eng: 20, mat: 48 }
];

let date = [];

let index = 0;
for(index = 0; index <studentList.length; index++) {
  date.push(con(10, 20));
  studentList[index].date = "date" + "[" + index + "]";
}

console.log(date);
console.log(studentList);
