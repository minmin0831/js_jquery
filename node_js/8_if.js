let num = 10;
num++;
console.log(num);

num += 20;
console.log(num);

const a = 10;
const b = 20;
if (a > b) {
  console.log('a is bigger than b.');
} else {
  console.log('b is bigger than a.');
}

const c = 50;
const d = '50'; // '50'은 문자열이나 == 연산자를 이용하면 == 연산자는 값만 비교하기 때문에 타입에 상관없이 비교 결과를 넘긴다. 하지만 === 연산자는 데이터 타입까지도 비교하여 이 예제의 경우 c is not equal to d 라는 메시지가 출력된다. 
if (c === d) {
  console.log('c is equal to d.');
} else {
  console.log('c is not equal to d.');
}

console.log(a < b || c == d); // 실제 둘 다 true이며 조건은 둘 중에 하나만 true 여도 결과는 true를 반환.
console.log(a > b || c == d); // 전자는 false, 후자는 true 이지만 조건은 둘 중에 하나만 true 여도 결과는 true를 반환.

console.log(a < b && c == d); // 실제 둘 다 true이며 조건은 둘 다 true이어야만 결과로 true를 반환. 
console.log(a > b && c == d); // 전자는 false, 후자는 true 이지만 조건은 둘 다 true이어야만 결과로 true를 반환. 

// 삼항 연산자 
const num2 = 10;
const num3 = 20;
const result = num2 > num3 ? 'num2' : 'num3'; // ? 선행문의 결과가 true이면 : 의 왼쪽 값을 ? 선행문의 결과가 false이면 : 의 오른쪽 값을 반환한다. 
console.log(result, 'is bigger.');
const list = [10, 20, 30];
const list2 = [];
list.length > 0 ? console.log('array value = ', list) : console.log('array value is empty.');
list2.length > 0 ? console.log('array value = ', list2) : console.log('array value is empty.');