const sum = (a, b) => a + b;
const result = sum(10, 20);
console.log('두 수의 합 : ', result);

const result2 = sum; // sum() 이라는 함수를 result2에 저장. 
console.log(result2);

const sum2 = () => (a, b) => a + b;
const result3 = sum2; // curring 함수 (함수에 함수가 들어있는 것.)

const countdown = (value) => {
    console.log('출력값 : ', value); // 최초 파라미터 값을 console로 출력. 
    if(value === 0) return value; // 해당 조건에 만족하지 않으면 무시하고 재귀함수 호출. 
    return countdown(value - 1); // 함수 내에서 자기 자신을 호출하는 재귀함수.
};
// 재귀함수는 조건문을 잘못 작성하거나 실수를 하면 무한 루핑을 돌 수 있다. 

const lastValue = countdown(10);
console.log('최종값 : ', countdown(10));
console.log('최종값 : ', lastValue);