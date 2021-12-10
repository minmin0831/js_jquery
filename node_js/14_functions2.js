const hello = () => {
  console.log('Hello World');
};

try {
  hella(); // 에러 코딩
} catch(e) {
  console.error(e); // console.log(e); 와 동일한데 에러 출력 목적으로 많이 사용한다. 
} finally {
  console.log('에러에 관계없이 수행!!');
}


// 함수는 앞에 있거나 뒤에 있거나 상관이 없다. 
goodbye();

function goodbye() {
  console.log('Good Bye');
}

// hiAgain('Chris'); // 이름이 없는 함수는 순서를 역행하여 호출하면 에러가 발생한다. 
const hiAgain = (name) => {
  console.log(`Hey, ${name}. Hi again!`);
};

hiAgain('Chris');
// 화살표 함수는 특수 목적으로 사용하는 함수이다. 


function sum(a, b) {
  const total = a + b;
  return total;
}

const result = sum(10, 20);
console.log('sum(total) : ', result);

