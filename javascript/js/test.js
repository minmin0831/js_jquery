window.onload = function () {
    var date = new Date(); // Javascript에서 제공하는 API 함수
    var hour = date.getHours();
    var output = "";

    if (hour > 16) {
        // 형 추론 방식의 변수 선언. 정수, 실수, 문자열, 불린 등 다양한 형태의 변수값을 저장할 수 있다. 
        output += "<ul>";
        output += "<li>후라이드 치킨</li>"
        output += "<li>골뱅이 무침</li>"
        output += "<li>먹태</li>"
        output += "</ul>";
        // output에 초기값을 주고 초기값에 값들을 계속 누적하여 더한다. 
    } else {
        output += "<ul>";
        output += "<li>김치찌개</li>"
        output += "<li>된장찌개</li>"
        output += "<li>부대찌개</li>"
        output += "</ul>";
    }
    document.body.innerHTML += output;
}
// window.onload에 function을 대입시켜달라는 문장이다.
