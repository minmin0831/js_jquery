const studentList = [
  { name: 'Chris', kor: 80, eng: 70, mat: 58 },
  { name: 'Ryan', kor: 90, eng: 90, mat: 68 },
  { name: 'David', kor: 60, eng: 80, mat: 88 },
  { name: 'Paul', kor: 50, eng: 60, mat: 98 },
  { name: 'Bailey', kor: 100, eng: 20, mat: 48 }
];
const sum = (a, b, c) => a + b + c;

studentList.forEach((student) => {
  console.log(`${student.name}'s total score: ${sum(student.kor, student.eng, student.mat)}`);
});


/*
콜백 함수: 
 - 어떤 함수에 콜백 함수가 있으면, 해당 함수를 수행한 다음에 콜백 함수를 수행한다. 
 - 여러 개의 함수를 콜백할 수도 있다.
 - 다수의 함수를 전달하여 전달받은 함수를 실행하는 것을 함수 체인이라고 한다.
*/
const sum2 = (a, b) => a + b;
// 일반함수

const printResult = (result) => {
  console.log(`결과는 ${result}입니다.`);
}
// 일반함수

const calculatorPrint = (calResult, callback) => {
  callback(calResult);
}
// 콜백 함수

calculatorPrint(sum2(10, 20), printResult); 
// calculatorPrint 함수를 호출하기 전에 sum2 함수를 호출하고 sum2의 평가후 도출된 값을 파라미터로 받고 printResult 함수를 파라미터로 받는다. 이후 printResult의 파라미터로 앞서 평가된 값을 받아 printResult 함수를 수행한다. printResult 함수는 결과가 콘솔에 출력될 수 있도록 코딩되어 있다. 

// 함수명(param1, param2) >> 함수 수행 후 평가 결과를 반환
// 함수명 >> 파라미터가 없이 함수명만 쓰이면 함수를 수행하지 않고 함수 자체를 대입

calculatorPrint(sum2, printResult); 
// 콜백 함수에는 파라미터 없이 함수들만 호출하는 것도 가능하다. 

