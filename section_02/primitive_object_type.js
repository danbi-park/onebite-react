//원시타입, 객체 타입
// 원시타입 : 값 자체로서 변수에 저장되고 복사된다. Number, String, Boolean 등..
// 객체 타입 : 참조값을 통해 변수에 저장되고 복사된다. Object, Array, Function 등.

// 원시타입의 경우
let a = 1; // memory 에 1 저장하구 a 을 1로 가리키게 함
let b = a; // 이렇게 넣는걸 복사라고 함, 무튼 이렇게 넣으면 1이라는 값이 또 메모리에 생성되고 그걸 b가 가리키게 함
b = 2; // 2라는 값을 새로운 메모리 공간에 저장하고 b를 2로 가리키게 함
// 하지만 이때 메모리에 저장되었던 1은 사라지지 않아 복사되고 변경되는 과정에서 원본은 변경되지 않아 메모리가 낭비된다.

console.log(a);
console.log(b);

// 객체 타입의 경우
let obj = {name: "John", age: 20}; // memory에 값을 저장후 참조값을 obj가 가리키게 함
let obj2 = obj; // 복사 시 obj2가 obj가 가리키는 참조값을 가리키게 함
obj2.name = "Jane"; // 참조값을 가리키고 있기 때문에 obj도 변경된다. 값이 수정됨.
console.log(obj); // "Jane"
console.log(obj2); // "Jane"

// 따라서 원시 타입은 메모리에 저장된 원본 데이터는 수정되지 않기 때문에 "불변 값"이라고 부르고
// 객체 타입은 메모리에 저장된 원본 데이터가 수정될 수 있기 때문에 "가변 값"이라고 부른다.


// 객체 타입을 다룰 경우 의도치 않게 수정되지 않도록 주의해야함! 

// 해결 방법
// 1. 객체 복사 시 spread 연산자 사용
let obj3 = {...obj};
obj3.name = "John";
console.log("obj", obj); // "Jane"
console.log("obj3", obj3); // "John"

// 참고로 그대로 대입 하는 경우 얕은 복사라고 하고 새로운 객체를 생성하여 프로퍼티만 복사하는 것을 깊은 복사라고 학
let o1 = {name: "John", age: 20};
let o2 = o1; // 얕은 복사
let o3 = {...o1}; // 깊은 복사
 
// 기본적으로 비교 연산은 참조값을 기준으로 평가한다. (얕은 비교)
console.log(o1 === o2); // true
console.log(o1 === o3); // false

// 만약 객체 내 프로퍼티가 같은지 확인하고 싶다면 JSON.stringify를 사용하여 문자열로 변환하여 비교한다. (깊은 비교)
console.log(JSON.stringify(o1) === JSON.stringify(o3)); // true


// 배열과 함수도 사실 객체이다.
let arr = [1, 2, 3];
let func = function(){};

console.log("arr", arr);
console.log("func", func);

// 배열과 함수도 얕은 복사와 깊은 복사가 있다.
let arr2 = arr;
arr2.push(4);
let func2 = func;

console.log("arr", arr)
console.log("arr2", arr2)

let arr3 = [...arr];