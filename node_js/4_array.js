const num = 12;

let result;
if (isNaN(num)) { // 숫자가 아니면 true를 반환하는 메서드 isNaN()이다. 
  result = 'is not a number.';
} else {
  result = 'is a number.';
}
console.log(num, result);

console.log('10 % 3 = ', 10 % 3); // % 기호는 자바스크립트에서 나머지 연산자도 되고 대입 연산자도 된다. 

const str = 'computer';
console.log('%s contains %d letters.', str, str.length);
console.log(`${str} contains ${str.length} letters.`);

console.log(`The first letter of ${str} is ${str[0]}.`);
console.log(`The last letter of ${str} is ${str[str.length - 1]}.`);

// let com = console.log(str.indexOf('com')); // 0
// let put = console.log(str.indexOf('put')); // 3
// let the = console.log(str.indexOf('the')); // -1

let strings = ['com', 'put', 'the'];
let index = 0;
console.log(strings[0]);

// let result = 0;
// for (let i = 0; i < strings.length; i++) {
//   result = str.indexOf("'", i, "'");
//   if (result == -1) {
//     console.log('fail to read.');
//   }
//   console.log(strings[i].indexOf);
// }


