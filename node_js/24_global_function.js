const studentList = [
  { name: 'Chris', kor: 80, eng: 70, mat: 58 },
  { name: 'Ryan', kor: 90, eng: 90, mat: 68 },
  { name: 'David', kor: 60, eng: 80, mat: 88 },
  { name: 'Paul', kor: 50, eng: 60, mat: 98 },
  { name: 'Bailey', kor: 100, eng: 20, mat: 48 }
];

studentList.sort((before, next) => before.mat - next.mat);
console.log('소트 결과 : ', studentList);

const strs = ["Dog", "Cat", "Fish", "Hamster", "Parrot"];
const sliced = strs.slice(1, 3); // 1번 위치부터 3번위치 전까지의 배열값 출력.
console.log(sliced);



const salesList = [
  { name: 'Chris', age: 20, sales: 3},
  { name: 'Ryan', age: 30, sales: 10},
  { name: 'David', age: 24, sales: 15},
  { name: 'Paul', age: 35, sales: 7},
  { name: 'Bailey', age: 40, sales: 12}
];

// salesList.sort((before, next) => {
//   if(before.sales < next.sales) return 1;
//   else if(before.sales > next.sales) return -1;
//   return 0; 
// });

// console.log(salesList);

const sorted = salesList.sort((now, next) => now.sales - next.sales);
console.log('오른차순 소트 : ', sorted);
const reversed = sorted.reverse().slice(0, 3);
console.log('판매실적 TOP 3 (배열을 역순으로 소트) : ', reversed);