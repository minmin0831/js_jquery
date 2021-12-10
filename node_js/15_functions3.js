const studentList = [
  { name: 'Chris', kor: 80, eng: 70, mat: 58 },
  { name: 'Ryan', kor: 90, eng: 90, mat: 68 },
  { name: 'David', kor: 60, eng: 80, mat: 88 },
  { name: 'Paul', kor: 50, eng: 60, mat: 98 },
  { name: 'Bailey', kor: 100, eng: 20, mat: 48 }
];

function getDegree(avg) {
  if(avg >= 90) {
    return 'A';
  } else if(avg >= 80) {
    return 'B';
  } else if(avg >= 70) {
    return 'C';
  } else if(avg >= 60) {
    return 'D';
  } else if(avg >= 50) {
    return 'F';
  }
}

function getDegree(avg) {
  let degree = '';
  if(avg >= 90) {
    degree = 'A';
  } else if(avg >= 80) {
    degree = 'B';
  } else if(avg >= 70) {
    degree = 'C';
  } else if(avg >= 60) {
    degree = 'D';
  } else if(avg >= 50) {
    degree = 'F';
  }
  return degree;
}

studentList.forEach((student) => {
  let avg = (student.kor + student.eng + student.mat) / 3;
  const result = `name : ${student.name} § 등급 : ${getDegree(avg)}`;
  console.log(result);
});
// 일반 for loop으로 풀어서 다시 코딩해보기.


function plus(a, b) { // const plus(a, b) => a + b;
  return a + b;
}

function minus(a, b) { // const minus(a, b) => a - b;
  return a - b;
}

let p = plus; // plus라는 함수 객체를 변수에 함수 자체로 넣은 것이다. 
console.log(p); 
console.log('Type of plus() : %s', typeof plus); // function 
console.log('Type of p : %s', typeof p); // function 
console.log('sum of two numbers : %d', p(20, 50)); // 70. 함수를 변수 대신에 대입하여 출력할 수도 있다. 

let pArray = []; // 배열에 함수를 넣을 수도 있다. 
pArray.push(plus);
pArray.push(minus);
console.log(pArray);

// 계산기 함수
function calculator(a, b, func) { // 파라미터로 함수를 받을 수도 있다. 
  return func(a, b); // 파라미터로 함수를 받았기 때문에 파라미터로 받은 함수에 파라미터로 받은 변수를 넣을 수도 있다. 
  // 이것을 호출할 때는 아래와 같이 calculator(10, 20, plus) 와 같은 방식으로 호출할 수 있다.
  // plus는 기존에 정의한 함수이다. 
}

console.log(calculator(10, 30, plus)); // 이것이 가능한 이유는 calculator 함수에서 func(a, b)를 리턴하라는 리턴문을 작성해주었기 때문이다. plus(20, 30) 이런 식의 코딩을 하면 안된다. 
console.log(calculator(10, 20, p));

const sum = (a, b) => {
  const result = a + b;
  return `두 수의 합은 = ${result}`;
}
console.log(sum(20, 30));
