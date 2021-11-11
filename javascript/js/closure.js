function hello(name) {
    var output = "Hello, " + name;
    return function () { 
        // 지역 변수를 익명함수로 외부로 보내준다. 리턴된 함수 자체를 closure라고 부르기도 하고 외부로 내보내진 변수를 closure라고도 한다. 
        console.log(output);
    };
}
hello("David")(); // 함수 호출 후, 잉여 괄호 ()가 closure이다. 



function hello2(name) { // 생성자 함수
    this.name = name;
}

hello2.prototype.say = function() {
    console.log("Hello, " + this.name);
}

var Chris = new hello2("Chris");
var Shawn = new hello2("Shawn");

Chris.say();
Shawn.say();

Chris.name = "Steve"; // Chris 객체에 저장된 name 변수값이 Steve로 바뀐다. 
Chris.say();



function hello3(name) { // 생성자 함수
    var name = name;
    return function() {
        console.log("Hello, " + name);
    }
}

var John = new hello3("John");
var Laura = new hello3("Laura");

John();
Laura();
John.name = "Will"; // 클로져를 사용하여 정보를 은닉하였기 때문에 생성자 함수 내부 변수값이 변경되지 않는다. 
John();

// John = null; // 메모리에서 지우려면 객체 변수에 null값을 저장한다. 
// John();



var index;
for(index = 0; index < 10; index++) { 
    // 9를 돌고 증감식이 적용되어 9+1 = 10이 되면 조건문에서 10 < 10이 false이기 때문에 반복문을 빠져나온다. 때문에 index에는 10이 저장된다. 
    // 이유는 증감식이 먼저 작동하고 그 다음에 조건문을 거치기 때문이다. 
    // 때문에 아래 loop 결과는 마지막 index 저장값인 10이 10번 반보된다. 
    // 마지막 저장값인 10이 10번 찍히는 이유는 for loop이 도는 속도가 0.1초보다도 훨씬 빨리 돌기 때문이다. 
    setTimeout(function() {
        console.log(index);
    }, 1);
}

var index2;
for(index2 = 0; index2 < 10; index2++) { 
    (function (count) {
        setTimeout(function() {
            console.log(count);
        }, 100);
    })(index2);
}




/* MOVING TEXT 함수 */
// radom int 생성 함수(위치 설정)
function randomInt(limit) {
    return Math.round(Math.random()*limit);
}

// random speed 생성 및 리턴 함수
function randomSpeed(maxSpeed) {
    return Math.random() * maxSpeed - Math.random() * maxSpeed;
}

// random alphabet 리턴 함수
// var alphabet = "내일은제이쿼리시작합니다";
function randomAlphabet() { // 함수를 100번 호출하게 된다. 
    var alphabet = "abcdefghijklmnopqrstuvwxyz"; // 지역변수라 다른 곳에서 수정할 수 없도록 하기 위해 closure한것이다. 
    return alphabet.charAt(randomInt(25)); // charAt 인수로 randomInt() 함수를 넣는다. randomInt() 함수의 인수값을 25로 지정한 이유는 알파벳 배열 위치값이 0부터 25번 배열까지 차지하기 때문이다. 
}
alphabet = "내일은제이쿼리시작합니다"; // alphabet은 지역변수로 closure 처리되었기 때문에 수정 불가하다. 


var randomAlphabetClosure = (function() { // 함수를 1번 호출하여 리턴값만 리턴한다. (Closure)
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    return function () {
        return alphabet.charAt(randomInt(25));  // randomInt로 구한 값을 위치값으로 여기고 해당 위치값에 있는 문자열을 리턴한다. 
    }
})();
alphabet = "내일은제이쿼리시작합니다"; // alphabet은 지역변수로 closure 처리되었기 때문에 수정 불가하다. 


// text moving 생성자 함수
var canvasWidth = 700;
var canvasHeight = 400;
function movingText() {
    this.x = randomInt(canvasWidth); // 0~699 사이의 random 값을 리턴받는다. 
    this.y = randomInt(canvasHeight); // 0~399 사이의 random 값을 리턴받는다. 
    this.vx = randomSpeed(10); // 
    this.vy = randomSpeed(10); // 
    this.myBody = document.createElement('h1'); // myBody는 생성된 h1의 객체변수이다. 이 myBody는 HTML 문서의 body가 아니라 해당 함수에서 정한 영역 body를 의미한다. 
    // this.myBody.innerHTML = randomAlphabet();
    this.myBody.innerHTML = randomAlphabetClosure();
    this.myBody.style.position = "absolute";
    document.body.appendChild(this.myBody); // document.body는 HTML 문서의 body 영역이다. 
}

// text moving 메서드 (prototype)
movingText.prototype.move = function() {
    // move라는 메서드는 vx, vy 속도로 x와 y를 한번 움직이인다. 나중에 실행할 때 for loop으로 반복 실행된다. 
    if(this.x < 0 || this.x > canvasWidth) {
        this.vx *= -1; // 음수를 양수로 바꿔줄 수 있도록 -1을 곱해준다. 영역을 벗어나지 않도록 한다. 
    }
    if(this.y < 0 || this.y > canvasHeight) {
        this.vy *= -1; // 음수를 양수로 바꿔줄 수 있도록 -1을 곱해준다. 영역을 벗어나지 않도록 한다. 
    }
    this.x += this.vx;
    this.y += this.vy;

    this.myBody.style.left = this.x + "px";
    this.myBody.style.top = this.y + "px";
}


// onload 실행 함수
window.onload = function () {
    var movingTexts = [];
    for (var i = 0; i < 100; i++) {
        movingTexts.push(new movingText());
        // movingText 객체를 movingTexts 배열의 0부터 99번지까지 저장한다. 
    }
    setInterval(function () {
        for (var i in movingTexts) {
            movingTexts[i].move();
        }
    }, 1000 / 60);
    // 1초에 60번 수행 (0.16초 간격)
};