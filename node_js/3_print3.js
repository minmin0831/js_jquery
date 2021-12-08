let me = "Ryan";
const age = 20;
const kor = 90, eng = 85, mat = '70';

// 백틱을 이용하여 "Hello, Ryan. Your age is 20 years old. 
// 포맷팅을 이용해서 Your Korean score 90, English is 85 and math is 70 scored. After all, your total score is 245."

console.log("Hello", me, '.'); // 콤마를 이용한 문장 연결. (각 문자열 앞에 자동 whitespace가 추가된다.)
console.log(`Your age is ${age} years old.`); // back-tick을 이용한 문장 완성. ${ } 안에 변수 명을 입력한다. 
console.log("%s, your Korean score is %d, English is %d and math is %s scored. After all, your total score is %d.", me, kor, eng, mat, kor + eng + mat);
// format을 이용한 문장 출력. %d에는 숫자가 %s에는 문자가 대입된다.
// 문자열을 넣으면 175 (kor + 85)에 문자열 70을 합하여 17570으로 출력된다. 

