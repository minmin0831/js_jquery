let num = 10;
console.log('num : ', num);

try {
  let num = 10;
  console.log('num : ', num);
  massagePrint('Hello World');
} catch (e) {
  console.log('Error occurs : ', e);
}
console.log('Program finishes.');

/*
Java의 try / catch 구문과 달리 Javascript의 try / catch 문은
에러가 발생하여도 에러가 발생하지 않은 부분은 수행한다.
다만 에러 메시지를 출력하지 않고자 한다면 에러 메시지 변수 e를 빼면 된다.

실무에서 에러가 발생할 것 같은 곳에 try / catch 문으로 감싸주면 다른 코드 수행과 무관하게
에러 발생 원인의 분석범위를 좁히는 효과가 있다.
*/

