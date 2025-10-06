//1. 배열의 구조 분해 할당

// 다음과 같이 배열에 있는 원소들을 변수의 순서대로 하나씩 분해해서 할당하는 문법을 구조 분해 할당이라고 함
let arr = [1, 2, 3];

let [a, b, c, d = 4] = arr;

console.log(a, b, c, d);


//2. 객체의 구조 분해 할당
// 중괄호를 사용한다.
let obj = {name: "John", age: 20, gender: "male"};

let {name, age: myAge, gender} = obj;

console.log(name, myAge, gender);
console.log(name);

// 객체의 구조 분해 할당

let person = {name: "John", age: 20, hobby: "Tennis", extra: {height: 180, weight: 70}};


const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
}

func(person);