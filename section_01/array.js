// 배열이란?
// -> 여러 개의 값을 "순서대로" 저장하는 자료구조
// 어떤 값이든 저장 가능, 길이의 제한도 없음
//const anyany = [1, 2, 3, 4, 5, "dog", "cat", "bird",true, false, null, undefined, {name: "John", age: 20}];

// 1. 배열 생성
// 배열 생성자
const animalA = new Array("dog", "cat", "bird", "fish");

console.log( "animalA", animalA);

// 2. 배열 리터럴
// 배열 리터럴
const animalB = ["dog", "cat", "bird", "fish"];
console.log( "animalB", animalB);


// 배열 요소 접근
console.log( "animalB[0]", animalB[0]);
console.log( animalB[0],animalB[1],animalB[2],animalB[3]);

// 배열 속성 수정
animalB[0] = "human";
console.log( "animalB[0]", animalB[0]);

// 배열 속성 삭제
delete animalB[0];
console.log( "animalB[0]", animalB[0]);

// 배열 속성 추가
animalB.push("horse");
console.log( "animalB", animalB , "animalB.length", animalB.length);

