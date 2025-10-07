// 5가지 배열 순회 메소드

// 1. forEach()
// 배열의 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr = [1, 2, 3];

// forEach() 메서드의 인자
// item: 각 요소
// index: 인덱스
// array: 전체 배열의 값
arr.forEach(function (item, index, array) {
    // console.log(item, index, array);
    // console.log(item, item * 2);
});

let doubledArr = [];

arr.forEach((_, i) => {
    // console.log(item, item * 2);
    // doubledArr.push(i * 2);
});

// console.log("doubledArr", doubledArr);


// ====  탐색과 관련된 메소드

// 2. includes()
let arr2 = [1, 2, 3];
let isIncluded = arr2.includes(2);
// console.log(isIncluded); // true를 반환한다.


// 3. indexof()
// 특정 요소의 인덱스(위치)를 찾아 반환한다.
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); // 2가 있는 가장 첫번째 인덱스를 반환한다.
let index2 = arr3.indexOf(4); // 4가 없으면 -1을 반환한다.
// console.log(index); // 1이 반환된다. 
// console.log(index2); // -1이 반환된다. 

// 4. findIndex()
// 모든 요소를 순회하며, 콜백함수를 만족하는(참인) 특정 요소를 찾아 인덱스를 반환한다.
// 조건에 맞는 요소가 없으면 -1을 반환한다.
// 조건에 맞는 요소가 여러개면 첫번째 요소의 인덱스를 반환한다.
let arr4 = [1, 2, 3];
let index3 = arr4.findIndex((item) => item == 2);
console.log(index3); // 2가 반환된다. 

// 왜 굳이 findIndex()를 사용해야 하는가?
// indexOf는 얕은 비교로 객체를 찾음
let objectArr = [{name: "John"}, {name: "Jane"}, {name: "Jim"}];
let index4 = objectArr.indexOf({name: "Jane", age: 21});
console.log(index4); // -1이 반환된다. 

// findIndex는 깊은 비교로 객체를 찾음
let index5 = objectArr.findIndex((item) => item.name == "Jane");
console.log(index5); // 1이 반환된다. 


// 5. find()
// 모든 요소를 순회하며, 콜백함수를 만족하는(참인) 특정 요소를 찾아 그대로 반환한다.
// 조건에 맞는 요소가 없으면 undefined를 반환한다.
// 조건에 맞는 요소가 여러개면 첫번째 요소를 반환한다.
let arr5 = [1, 2, 3];
let item = arr5.find((item) => item == 2);
console.log(item); // 2가 반환된다. 
