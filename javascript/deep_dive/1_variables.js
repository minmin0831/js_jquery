
/* NUMBER TYPES */
var integer = 10;
var double = 10.0;
console.log(integer == double); // true 
console.log(integer === double); // true 타입은 다르지만 int의 경우 double로 casting이 되어 동일한 타입으로 변환되어 타입 비교 시 true를 반환한다. 
// 뿐만 아니라 모든 숫자는 모두 실수로 처리한다. 

var doublized = 4 / 2; // 2
console.log(doublized);

var doublized2 = 3 / 2; // 1.5
console.log(doublized2);

// infinity
console.log(10 / 0); // infinity 
console.log(10 / -0); // -infinity 

// NaN
var x = 'nan'; // nan
var nan = 1 * "String";  // NaN (Not a Number)
console.log(x == nan); // false. NaN은 대소문자를 구분한다. 

var radixBinary = 0b01000001;
console.log('radixBinary : ' + radixBinary); // 65

var radixOcta = 0o101;
console.log('radixOcta : ' + radixOcta); // 65

var radixHexa = 0x41;
console.log('radixHexa : ' + radixHexa); // 65

console.log(radixBinary == radixHexa); // true
console.log(radixBinary === radixHexa); // true
console.log(radixHexa == radixOcta); // true
console.log(radixHexa === radixOcta); // true


/* STRING TYPE */
var string;
string = 'string';
string = "string";
string = `string`; // 세 가지 다른 형태로 텍스트를 감싼다. 일반적으로는 작은 따옴표를 쓴다. 

var str = 'hello';
var str2 = "world";
var bool = true;
var bool2 = false;
var bool3 = 10 > 5; // returns true 
console.log('bool3 : ' + bool3);

var bool4 = 10 > 20; // returns false 
console.log('bool4 : ' + bool4);

var nullVal = null;
var undefinedVal = undefined;
console.log('undefinedVal : ' + undefinedVal);

var obj = { name: "Lee", address: "Seoul Korea", age: 30, married: 1 };
console.log(obj);
console.log(obj.married);
var married = obj.married;
if (!married) {
  console.log('he is a single.');
  married = false;
} else {
  console.log('he is married.');
  married = true;
}
console.log(married);

var arr = [1, 2, 3];
console.log(arr[0]);

// 함수도 변수에 저장할 수 있다. 여기서 변수명은 곧 함수명이 된다. 
var arrFunc = function (arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// 호출 시 일반 함수 호출하듯이 함수명 뒤에 () 안에 함수에서 받을 파라미터명으로 대입시켜주면 된다. 
var result = arrFunc(arr);
console.log('result of arrFunc : ' + result);

// 정규표현식도 하나의 변수에 저장할 수 있다. 
var reg = /[A-Z] + /g;
console.log(reg);

var x;
x = 5;


/* Template Literal (ES6) */
// multi-line string, expression interplation, tagged temlate 등 편리한 문자열 처리 기능을 제공.
var template = `Template literal`;
console.log(template);
var templete2 = `Hello
World.`; 
console.log(templete2); 
// 일반 문자열과 달리 줄바꿈이 허용된다. 
// 일반 문자열을 사용할 때 줄바꿈을 위해 이스케이프 시퀀스 사용을 피할 수 있다는 장점이 있다. 
var old_style = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(old_style);
var new_style = `<ul>
  <li><a href="#">Home</a></la>
  </ul>`;

// 표현식 삽입
var first = 'Minseok';
var last = 'Jeon';
console.log(`My name is ${first} ${last}.`);

console.log(`1 + 2 = ${1 + 2}`); // 표현식 삽입 시, 평가 결과가 문자열이 아니더라도 문자열로 타입이 강제 변환되어 삽입된다. 
console.log('1 + 2 = ${1 + 2}'); // 문자열로 취급됨. 

/* undefined */
var unassigned;
console.log(unassigned); // undefined. javascript에서 개발자의 의도와 다르게 값을 임의로 할당한 것이기 때문에 변수에 값이 없다는 것을 명시하고 싶을 때는 그냥 null을 할당해준다. 

/* null */
var nullable = 'Lee';
foo = null;
console.log(foo);

// var element = document.querySelector('.myClass');
// console.log(element); 
// 1_variables.html 문서에 myCalss 클래스를 갖는 요소가 없다면 null을 반환한다. 

