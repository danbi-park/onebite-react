// 1. 상수 객체
const animalB = {
    dog : "🐕",
    cat : "🐱",
    bird : "🐦",
    fish : "🐟",
}

// 상수지만 속성 추가, 수정, 삭제 가능
animalB.human = "👨"; // 속성 추가
animalB.dog = "🐶"; // 속성 수정
delete animalB.bird; // 속성 삭제

console.log(animalB);

// 어떻게 가능하나?
// -> 새롭게 객체를 생성하는 것이 아니라 기존 객체의 속성을 수정하는 것은 가능

// 2. 메서드
// -> 값이 함수인 프로퍼티

const person = {
    name : "John",
    age : 20,
    // 메서드 선언
    sayHello : function(){
        console.log("Hello, my name is " + this.name);
    }
}

person.sayHello();
person["sayHello"]();