// 객체 생성
// 객체 생성자
let obj = new Object();
obj.name = "John";
obj.age = 20;
obj.gender = "male";
obj.location = "Seoul";


// 객체 리터럴
let person = {
    name : "John",
    age : 20,
    gender : "male",
    location : "Seoul",
    sayHello : function(){
        console.log("Hello, my name is " + this.name);
    },
    extra : {
        height : 180,
        weight : 70,
    }
}

// 객체 속성 접근
// 점 표기법
let name = person.name;
// 대괄호 표기법
let name2 = person["name"];

console.log(name);
console.log(name2);


// 속성 추가
person.job = "developer";
console.log(person.job);


// 속성 삭제
delete person.job;
console.log(person.job);
console.log(person);

// 객체 속성 수정
person.name = "Jane";
console.log(person.name);

// 속성 존재 여부 확인
let result = "name" in person;
console.log(result);