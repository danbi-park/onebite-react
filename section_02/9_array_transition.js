// 5가지 배열 변환 메소드

// 1. filter()
// 기존 배열에서 조건을 만족하는 요소만 뽑아서 새로운 배열을 반환한다.
let arr = [
    {name: "박단비", hobby: "축구"}, 
    {name: "김민준", hobby: "축구"}, 
    {name: "이영희", hobby: "테니스"},
    {name: "홍길동", hobby: "테니스"},
];
let filteredArr = arr.filter((item) => item.hobby == "테니스");
// console.log(filteredArr); // [{name: "이영희", hobby: "테니스"}, {name: "홍길동", hobby: "테니스"}]


// 2. map()
// 배열의 모든 요소를 순회하며, 각각 콜백함수를 실행하고 그 결과값들을 새로운 배열로 반환한다.
let names = arr.map((item) => item.name);
// console.log(names); // ["박단비", "김민준", "이영희", "홍길동"]

// 반환값을 조작할 수 있다.
let namesPolite = arr.map((item,  index, arr) => {
    return item.name + "님";
})
// console.log(namesPolite); // ["박단비님", "김민준님", "이영희님", "홍길동님"]


// 3. sort()
// 배열을 사전순으로 정렬하는 메소드

// 주의할 점! "사전순, 문자여 기준"으로 비교하기 때문임.
// 숫자를 문자열로 변환 후 UTF-16 코드 유니코드 값으로 비교하기 때문임.
let arr3 = [10, 3, 5, 20]; // 1의 49, 3의 51, 5의 53 순으로 정렬됨.
arr3.sort();
console.log(arr3); // [10, 20, 3, 5]

// 숫자를 정렬하기 위해서는 괄호안에 기준을 넣어주는 콜백함수를 사용해야 한다.
let arr4 = [10, 3, 5, 20];
arr4.sort(function (a, b) {
    if(a > b) {
        // b가 a 앞에 와라
        return 1; // => b, a
    } else if(a < b) {
        // a가 b 앞에 와라
        return -1; // => a, b
    } else {
        return 0;
        // 두 숫자가 같으면 그대로 둬라
    }
})

// 쉽게 사용하기
arr4.sort((a, b) => a - b); // 오름차순
console.log(arr4); // [3, 5, 10, 20]
arr4.sort((a, b) => b - a); // 내림차순
console.log(arr4); // [20, 10, 5, 3]

// 4. toSorted()
// 배열을 정렬하여 새로운 배열을 반환한다. 원본 배열은 변경되지 않는다.!!
let arr5 = [10, 3, 5, 20];
let sortedArr = arr5.toSorted((a, b) => a - b);
console.log(sortedArr); // [3, 5, 10, 20]


// 5. Join()
// 배열의 모든 요소를 하나의 문자열로 결합하여 반환한다.
let arr6 = [1, 2, 3, 4, 5];
let joinedStr = arr6.join();
console.log(joinedStr); // "1,2,3,4,5"
let joinedStr2 = arr6.join("-");
console.log(joinedStr2); // "1-2-3-4-5"
