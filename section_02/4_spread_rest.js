// 1. Spread 연산자
// 객체나 배열에 저장된 여러개의 값을 "개별로" 흩뿌려주는 역할

//배열의 경우
let arr = [1, 2, 3];

let arr2 = [...arr, 4, 5, 6];
let arr3 = [0, ...arr, 4, 5, 6];

console.log(arr2);
console.log(arr3);

//객체의 경우
let obj = {name: "John", age: 20, gender: "male"};

let obj2 = {...obj, hobby: "Tennis", extra: {height: 180, weight: 70}};

console.log(obj2);


function func(p1, p2, p3){
    console.log(p1, p2, p3);
}
func(...arr);
// func(arr); -> 배열 그대로를 p1로 전달하는거임


// 2. Rest 연산자
// 배열이나 객체에 저장된 여러개의 값을 하나의 변수에 모아주는 역할
// 나머지, 나머지 매개변수
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [a, b, ...rest] = arr4;


// rest 매개변수 뒤에는 또 다른 매개변수를 정의할 수 없다.
// ...args 이름도 상관없음
function funcB(one, two, ...rest){
    console.log(rest);
}

funcB(...arr);