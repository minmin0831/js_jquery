const num = 20;
const fname = "Ryan";
console.log('Type of 20? ', typeof num);
console.log('Type of Ryan? %s', typeof fname);
console.log('Type of 50?', typeof '50');
console.log('Type of []?', typeof []);
console.log('Type of {}?', typeof {});

const bool = 50 > 10;
console.log('Type of bool?', typeof bool);
console.log('Type of 50 > 10?', typeof 50 > 10);
console.log('Type of 50 < 10?', typeof 50 < 10);

const num1 = 1;
console.log(num1);
console.log('Type of num1?', typeof num1);

const num2 = !1; // 숫자에 불린값을 더해 강제로 타입을 boolean으로 변경해버린다. 
console.log(num2);
console.log('Type of num1?', typeof num2);

