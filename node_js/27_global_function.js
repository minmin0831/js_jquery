let sum = 0;
for(let i = 1; i<=10; i++) {
    sum +=i;
}
console.log('sum : ',sum);

const sumNumber = (start, end, sum) => {
    if(start > end) return sum; // 재귀 함수를 빠져나올 수 있는 조건: end값보다 start값이 클 경우, return값인 sum을 반환하고 빠져나간다. 
    return sumNumber(start+1, end, sum+start);
}; // 재귀함수를 for문 처럼 사용할 수 있다. 
console.log('sumNumber : ', sumNumber(1, 10, 0));

const factorial = (n) => {
    if(n === 0) return 1;
    return n * factorial(n-1); // 리턴할 때 자기 자신을 호출해주는 것으로 여긴다. 
};
console.log('factorial : ', factorial(5));

