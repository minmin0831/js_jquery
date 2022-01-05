// 클로져 (closure) - 내부 함수가 참조하는 외부 함수의 지역변수가 리턴된 이후에도 유효성이 유지될 때 이 내부 함수를 클로져라고 한다. 

function grandParent(g1, g2) {
    const g3 = 3; // 지역 변수
    return function parent(p1, p2) {
        const p3 = 33;
        return function child(c1, c2) {
            const c3 = 333;
            return g1 + g2 + g3 + p1 + p2 + p3 + c1 + c2 + c3;
        };
    };
};

const parentFunc = grandParent(1, 2); // parent 함수 자체가 parentFunc에 리턴되어 저장된다. 
const childFunc = parentFunc(11, 22); // child 함수 자체가 childFunc에 리턴되어 저장된다. 
console.log(childFunc(111, 222)); // 앞서 두 번 호출하였을 때, 초기값을 부여해준 것이 남아 있기 때문에 g1, g2, g3, p1, p2, p3 가 모두 남아 있는다. 마지막으로 childFunc을 호출하면 가장 안쪽에 있는 함수 child 함수의 리턴값이 반환된다. 

// 합성 함수 - 여러 개의 함수를 합쳐서 쓰는 방법
const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiple = (a, b) => a * b;
const div10 = x => x / 10;

console.log(minus(plus(10, 20), 5));
console.log(multiple(div10(50), 8));


// 커링 (currying) - 여러 개의 파라미터를 갖는 함수가 있을 때, 그 중 일부 파라미터만 필요로하는 함수. 
const add = x => y => x + y;
console.log(add(10)(20));

const add10 = add(10);
console.log(add10(20));

const coffeeMachine = liquid => espresso => `${espresso} + ${liquid}`; // 두 개의 함수를 연결하여 커링 함수 원형 (최종 리턴 값은 하나이다.)
const americanoMachine = coffeeMachine('Water'); // 첫번째 함수의 파라미터 정의 
const latteMachine = coffeeMachine('Milk'); // 첫번째 함수의 파라미터 정의 

const americano = americanoMachine('Colombian Coffeebean'); // 두번째 함수 파라미터 정의 
const latte = latteMachine('Arabian Coffeebean'); // 두번째 함수 파라미터 정의 

console.log(americano);
console.log(latte);


// filter 함수
const ages = [11, 15, 18, 21, 25, 30];
const upper20 = ages.filter(age => age > 20); // filter 함수 내 age 함수를 실행하여 조건에 맞으면 해당 배열값만 upper20에 배열 형태로 저장한다. 
console.log('20세 이상 : ', upper20);

const under16 = ages.filter(age => age < 16);
console.log('16세 미만 : ', under16);

console.log('20대 인원 : ', ages.filter(age => age >= 20 && age < 30)); // 함수를 변수에 저장하지 않고도 함수 자체로 사용이 가능하다. 

const memberList = [
    { name: 'Chris', age: 20, sales: 3},
    { name: 'Ryan', age: 30, sales: 10},
    { name: 'David', age: 24, sales: 15},
    { name: 'Paul', age: 35, sales: 7},
    { name: 'Bailey', age: 40, sales: 12}
];

const memberList20 = memberList.filter(member => member.age >= 20 && member.age < 30); // 객체를 하나씩 member에 대입. 각 객체 별로 age 필드값만 비교할 수 있도록 연결 연산자를 이용하여 age를 찾아준다. member.age로 조건문을 작성해준다. 
console.log('20대 인원들 : ',memberList20);

const list = [1, 2, 3, 4, 5];
const multipleList = list.map(item => item * 10);
console.log(multipleList);

const elist = [
    {name: 'note', price: 2000},
    {name: 'pencil', price: 1000},
    {name: 'eraser', price: 1500}
]

const priceInflate = elist.map(item => {
    elist.name = elist.name;
    elist.price = Math.round(item.price * 1.1)
});
console.log(priceInflate);