
const studentList = [
  { name: 'Chris', kor: 80, eng: 70, mat: 58 },
  { name: 'Ryan', kor: 90, eng: 90, mat: 68 },
  { name: 'David', kor: 60, eng: 80, mat: 88 },
  { name: 'Paul', kor: 50, eng: 60, mat: 98 },
  { name: 'Bailey', kor: 100, eng: 20, mat: 48 }
];


// for of 반복문: 배열 객체 데이터를 하나씩 뽑아서 studentData로 넘겨주고 포문을 실행한다. (배열, 객체에 유리한 for loop)
// index가 없다. 
for (const studentData of studentList) {
  console.log('for of :', studentData);
}


// 영어 점수가 80점 이상인 학생만 출력
for (const studentData of studentList) {
  if (studentData.eng >= 80) {
    console.log('bigger than 80 :', studentData.name);
  }
}


// forEach 함수
studentList.forEach(function (student) {
  console.log('forEach :', student);
});


// => 함수 
studentList.forEach((student) => {
  console.log('=> :', student);
});


// forEach 함수로 나이 총합 구하기
const ages = [23, 32, 40, 33, 25];
let sum = 0;

ages.forEach(function (age) {
  sum += age;
});
console.log('age sum :', sum);


// => 함수로 점수 총함 구하기
const scores = [90, 80, 60];
let total = 0;

scores.forEach((score) => {
  total += score
});
console.log('score total :', total);

