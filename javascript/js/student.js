/*
// 클래스 함수
function createStudent(name, english, spanish, mathematics, science) {
    // 속성 
    this.name = name;
    this.english = english;
    this.spanish = spanish;
    this.mathematics = mathematics;
    this.science = science;

    // 메서드
    this.getSum = function () {
        return this.english + this.spanish + this.mathematics + this.science;
    }
    this.getAvg = function () {
        return this.getSum() / 4;
    }
    this.toString = function () {
        return this.name + '&nbsp;<br>' + this.english + '<br>' + this.spanish + '<br>' + this.mathematics + '<br>' + this.science + '<br>' + this.getSum() + '<br>' + this.getAvg();
    }
}
*/

// 생성자 함수
function createStudent(name, english, spanish, mathematics, science) {
    // 속성 
    this.name = name;
    this.english = english;
    this.spanish = spanish;
    this.mathematics = mathematics;
    this.science = science;
}

createStudent.prototype.getSum = function () {
    return this.english + this.spanish + this.mathematics + this.science;
}
createStudent.prototype.getAvg = function () {
    return this.getSum() / 4;
}
createStudent.prototype.toString = function () {
    return this.name + '&nbsp;<br>' + this.english + '<br>' + this.spanish + '<br>' + this.mathematics + '<br>' + this.science + '<br>' + this.getSum() + '<br>' + this.getAvg();
}
