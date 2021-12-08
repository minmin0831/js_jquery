const studentList = [
  { name: 'Chris', kor: 80, eng: 70, mat: 58 },
  { name: 'Ryan', kor: 90, eng: 90, mat: 68 },
  { name: 'David', kor: 60, eng: 80, mat: 88 },
  { name: 'Paul', kor: 50, eng: 60, mat: 98 },
  { name: 'Bailey', kor: 100, eng: 20, mat: 48 }
]

let resultStudent = '';
let searchName = 'Bailey';
let index;

for (index = 0; index < studentList.length; index++) {
  if (studentList[index].name === searchName) {
    break;
  }
}

// for문을 돌려 break 할 때까지의 for문 반복횟수가 index에 저장된다. 
if (index == studentList.length) {
  console.log("can't search the student.");
  // for문에서 저장된 index 값과 studentList.length가 동일하다면, 배열 위치값보다 1이 큰 상태이므로 매칭되는 데이터가 없다는 것을 가정한 것이다. 이 경우 찾을 수 없다는 메시지를 출력한다. 
} else {
  console.log('Scores of %s', studentList[index].name);
  console.log('Korean :', studentList[index].kor);
  console.log('English :', studentList[index].eng);
  console.log('Mathmetics :', studentList[index].mat);
}