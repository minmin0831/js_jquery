const str = '<h1>Hello World</h1>';
const result = str.replace('<h1>', '').replace('</h1>', '');
console.log('결과1: %s', result);

// 정규표현식
const str1 = '<h1>Hello World</h1>';
const result1 = str1.replace(/<h1>/g, '').replace(/<\/h1>/g, '');
// html 닫는 태그에 들어가는 / 때문에 정규 표현식의 시작 슬래스(/)의 위치가 변경되어 인식된다. 
// 때문에 해당 닫는 태그 슬래시(/) 앞에 백슬래시(\)를 걸어준다. 그 결과 이와 같은 (\/) 기호가 만들어 진다. 
console.log('결과2: %s', result1);

const str2 = '<h1>Hello World</h1>';
const result2 = str2.replace(/<..>/g, '').replace(/<...>/g, ''); // period(.) 하나가 문자 1개를 의미한다. .. 이면 문자 두개인 문자열을 제거해준다. 
console.log('결과3: %s', result2);

const str3 = '<h1>Hello World</h1><p> Goodbye World</p>';
const result3 = str3.replace(/<.{0,3}>/g, '');
// 첫 글자가 있고 최대 3글자로 이루어진 태그는 모두 지운다. 0~3으로 지정하였으니까, 첫 글자는 없어도 된다. 
console.log('결과4: %s', result3);

const str4 = '<h1>Hello World</h1><p> Goodbye World</p><h2> Hello Again</h2>';
const result4 = str4.replace(/<.{0,1}h1>/g, '').replace(/<.{0,1}p>/g, '').replace(/<.{0,1}h2>/g, '');
// 첫 글자가 있고 최대 1글자로 이루어진 태그는 모두 지운다. 0~1로 지정하였으니까, 첫 글자는 없어도 된다. 
// 또한, h1 이라는 문자열이 들어간 태그는 모두 지운다. 
// 그리고 method chain 기법을 이용해 같은 replace 메서드를 반복하는데, 이번에는 p가 들어간 태그를 모두 지운다.
console.log('결과5: %s', result4);

const str5 = '/정상가/ - 30000 (특별할인가 - 23000원)';
const result5 = str5.replace(/[\/\-()]/ig, '');
// / 와 연산자 기호(=, +, -, /, %) 등이 있으면 백슬래시를 앞에 넣어줘야 한다.
console.log('결과6: %s', result5);

