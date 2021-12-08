
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

