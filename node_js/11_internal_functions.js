const today = new Date();
// console.log(today.getYear());
// console.log(today.getMonth());
// console.log(today.getDay());
// console.log(today.getDayOfWeek());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());
console.log(today.toLocaleString()); // 로컬 시간 (년, 월, 일, 시, 분, 초, AM/PM)
console.log('today : %s', today.toLocaleDateString()); // 로컬 (년, 월, 일)
console.log('current time : %s', today.toLocaleTimeString()); // 로컬 시간
console.log('Year : %s', today.getFullYear()); // 2021
console.log('Month : %s', today.getMonth() + 1);
console.log('Day : %s', today.getDate());

let price = 12640000;
console.log(`The price is KRW ${price.toLocaleString()}.`); // 숫자의 경우 toLocaleString() 메서드를 이용하면 중간에 콤마로 끊어 표현해준다. 

const christmasEve = new Date(2021, 12 - 1, 24);
console.log('Christmas Eve :', christmasEve.toLocaleString());

const christmas = new Date(2021, 12 - 1, 25, 18, 30, 30);
console.log('Christmas Service :', christmas.toLocaleString());
console.log('Christmas Service : %s', christmas.toLocaleString());

