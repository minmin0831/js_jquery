console.log('Name: %s', 'Steven');

let me = "Warren";
console.log('My name is %s G.', me); // %s는 String의 약자이다.

console.log('age = %d', 20); // %d는 Decimal의 약자이다. 소문자만 인정된다.
console.log('My height is %dcm and weight %dkg.', 172, 77.5, "(I'm left out)");
// 순서대로 하나씩 값들이 대입된다. 만약에 들어갈 자리가 없어 남는 값은 마지막 문자열로 자동 출력된다.
// 정수와 실수 모두 %d로 받는다. 숫자와 문자는 %d와 %s로 구분해주는 것이 좋다. 
