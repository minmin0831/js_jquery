const g = 'hello world';
const rg = g.replace('hello', 'goodbye');
console.log(`원본 문자: ${g} 
바뀐 문자: ${rg}`);

const tr = rg.replace('goodbye', '');
console.log('바뀐문자 : %s \n특정 문자열 삭제 : %s', rg, tr);

const names = 'David,Robert,Jane'; // 한 문자열에 여러 문자가 콤마로 구분되어 있다면 split함수로 콤마 기준 각각의 문자열을 잘라내어 다른 변수에 배열로 저장할 수 있다. 
const individual = names.split(',');
console.log(individual);
console.log(individual[0]);
console.log(individual[1]);
console.log(individual[2]);

const dateString = "2021-12-10 10:49:00";
const date = dateString.split(' ')[0]; // 변수에 저장하기 전에 배열이 완성되는데, 해당 배열의 값을 위치값 설정에 따라 변수에 따로 따로 저장해줄 수 있다. 
const time = dateString.split(' ')[1];
console.log('date = %s', date);
console.log('time = %s', time);

const price1 = '3000';
const price2 = '2000';
console.log('sum = ', price1 + price2); // 30002000 의 문자열이 출력. 
console.log('type of : %s, %s', typeof price1, typeof price2);
const price3 = price1 * price2;
console.log('문자열로 된 숫자를 곱하면, 자동으로 숫자로 변환되어 연산 수행. 결과: %s', price3);

console.log('sum = ', Number(price1) + Number(price2)); // 5000 의 숫자를 출력. 
console.log('type of : %s, %s', typeof Number(price1), typeof Number(price2));
console.log('sum = ', parseInt(price1) + parseInt(price2)); // 5000 의 숫자를 출력. 
console.log('type of : %s, %s', typeof parseInt(price1), typeof parseInt(price2));

const price4 = '3000원';
const price5 = '2000원';
console.log('sum = ', Number(price4) + Number(price5)); // NaN 출력
console.log('sum = ', parseInt(price4) + parseInt(price5)); // 5000 의 숫자를 출력. 숫자를 parsing 하다가 문자가 나오면 문자는 무시한다. 