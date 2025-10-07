// 6가지 요소 조작 메소드

// 1. push()
// 배열의 끝에 요소를 추가한다.
let arr1 = [1, 2, 3];
arr1.push(4);
arr1.push(5, 6, 7); // 여러 개의 요소를 추가할 수 있다.

// 또한 배열의 길이를 반환한다.
const newLen = arr1.push(8, 9, 10);
console.log(newLen); // 배열의 길이를 반환한다.

// 2. pop()
// 배열의 끝에 요소를 제거한다. 제거된 요소를 반환한다.
let arr2 = [1, 2, 3];
const removedElement = arr2.pop();
console.log(arr2);
console.log(removedElement);

// 3. shift()
// 배열의 첫 번째 요소를 제거한다. 제거된 요소를 반환한다.
let arr3 = [1, 2, 3];
arr3.shift();
console.log(arr3);

// 4. unshift()
// 배열의 첫 번째 요소를 추가한다. 변경된 배열의 길이를 반환한다.
let arr4 = [1, 2, 3];
const newLen2 = arr4.unshift(0);
console.log(arr4);
console.log(newLen2);

// shift와 unshift는 push와 pop보다 훨씬 더 느리다. 한칸씩 다 밀어버리기 때문에 비효율적으로 동작함
// 그래서 배열의 첫 번째 요소를 제거하거나 추가하는 경우는 가급적 push와 pop을 사용하자.


// 5.slice()
// 배열의 일부분을 잘라내어 새로운 배열을 반환한다.
let arr5 = [1, 2, 3, 4, 5];
const slicedArr = arr5.slice(2, 5); // 5번 인덱스의 이전까지 잘라낸다.
const slicedArr2 = arr5.slice(2); // 2번 인덱스부터 끝까지 잘라낸다.
console.log(slicedArr); // 3,4,5
console.log(slicedArr2); // 3,4,5

const slicedArr3 = arr5.slice(-2); // 뒤에서 2번째 인덱스부터 끝까지 잘라낸다.
console.log(slicedArr3); // 4,5


// 6. concat()
// 두 개의 배열을 결합하여 새로운 배열을 반환한다.
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
const newArr = arr6.concat(arr7);
console.log(newArr);