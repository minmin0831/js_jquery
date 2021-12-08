// 선언적 함수
function message(data) {
  console.log(data, ' This is a declaration of function.');
}
message('This is a parameter.');

// 표현식(수식) 함수
const myMessage = function () {
  console.log('This is my message.');
}; // 함수를 변수에 저장한 것이며 변수명을 함수명으로 봐도 된다.
myMessage(); // 일반 함수 호출하듯이 함수명으로 호출한다. 

// 화살표 함수
const arrowFunct = (message, date) => {
  console.log('is this node.js grammar? or Javascript ES6? %s But we have a test on %s', message, date);
} // ()에는 파라미터를 넣는다. 화살표 함수는 이와 다른 형태로도 많이 사용된다. 
arrowFunct("I don't know.", "next Tuesday");

const $getDate = (date) => {
  const cyear = date.getFullYear();
  const cmonth = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const cdate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const cday = date.getDay();
  let dayOfWeek = '';

  switch (cday) {
    case 1:
      dayOfWeek = 'MON';
      break;
    case 2:
      dayOfWeek = 'TUE';
      break;
    case 3:
      dayOfWeek = 'WED';
      break;
    case 4:
      dayOfWeek = 'THU';
      break;
    case 5:
      dayOfWeek = 'FRI';
      break;
    case 6:
      dayOfWeek = 'SAT';
      break;
    case 7:
      dayOfWeek = 'SUN';
      break;
  }
  return `${cyear}-${cmonth}-${cdate} ${dayOfWeek}`;
}

const today = $getDate(new Date());
console.log(today);
console.log('Christmas :', $getDate(new Date(2021, 12 - 1, 25)));


// datetimestamp
const date = new Date();
const datetimestamp = date.getTime();
// datetimestamp: 1970년 1월 1일 0시 0분 0초를 0으로 설정.
// millisecond로 증가한다. 
// n * 365 * 24 * 60 * 60 * 1000
console.log(datetimestamp); // 1638935158180 이런 식으로 milliseconds로 찍힌다. 

const getEntryDate = (date) => {
  const raw = datetimestamp + (date * 24 * 60 * 60 * 1000);
  const time = new Date(raw);
  const cyear = time.getFullYear();
  const cmonth = time.getMonth() + 1;
  const cdate = time.getDate();
  return console.log(`${cyear}-${cmonth}-${cdate}`);
}
getEntryDate(100);


