const person1 = {};
person1.name = 'John';
person1.age = 30;
person1.job = 'doctor';

const person2 = { // person2와 같은 객체를 JSON이라고 한다. 이미 JSON 파일은 존재하는 데이터를 활용한다. 
  name: 'Paul',
  age: 25,
  address: 'LA USA'
};

console.log(person1);
console.log(person1.name); // 첫번째 방식을 선호
console.log(person1['name']);
console.log(person2);

const ar = 'address'; // 객체의 인덱스 이름을 ar에 저장하여 인덱스 값을 접근할 수도 있다. 
console.log(person2.ar); // 이 경우 전자의 방식으로는 접근할 수 없다. 
console.log(person2[ar]);

// 매개변수 primitive는 원시값을 전달받고, 매개변수 obj는 객체를 전달받는다.
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'Kim';
}
// return 값이 없기 때문에 메서드 실행문 안에서만 실행되고 변경된 값을 외부에 영향을 주지 않는다.(다만 객체 정보는 참조 형태로 값을 저장하기 때문에 원본 데이터가 훼손된다.) 

// 외부상태
var num = 100;
var person = { name: 'Lee' };

console.log(num);
console.log(person);

// 원시값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다. 
changeVal(num, person);

// 원시값은 훼손되지 않는다.
console.log(num);

// 객체는 원본이 훼손된다.
console.log(person);
