// 순회란!? 
// -> 배열이나 객체의 각 요소를 하나씩 차례대로 접근하는 것

// 1.배열의 순회
let arr = [1, 2, 3, 4, 5];

// 1.1. 배열 인덱스로 순회
for(let i = 0; i < arr.length; i++){
    console.log("arr", arr[i]);
}

// 1.2. for of 반복문
// index를 저장하지 않고 순회함
for(let value of arr){
    console.log("arr", value);
}


// 2. 객체의 순회
let obj = {name: "John", age: 20, gender: "male"};

// 2.1. Object.keys() 메서드
// 객체에서 key값들만 뽑아서 새로운 배열로 반환한다.
let keys = Object.keys(obj);

for (let index = 0; index < keys.length; index++) {
    const element = keys[index];
    console.log(element +":", obj[element]);
}

for (let key of keys){
    console.log(key +":", obj[key]);
}

// 2.2. Object.values() 메서드
// 객체에서 value값들만 뽑아서 새로운 배열로 반환한다.
let values = Object.values(obj);
for (let value of values){
    console.log(value);
}

// 2.3. for in 반복문
// 객체를 위한 for 문
for(let key in obj){
    console.log(key +":", obj[key]);
}




// for of는 배열에 for in은 객체에 ! 