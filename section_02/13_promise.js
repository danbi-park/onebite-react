// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체
// - 비동기 작업 실행
// - 비동기 작업 상태 관리
// - 비동기 작업 결과 저장
// - 비동기 작업 병렬 실행
// - 비동기 작업 다시 실행
// 등등

// Promise의 3가지 상태
// - Pending : 비동기 작업 진행 중
// - Fulfilled : 비동기 작업 성공 // resolve
// - Rejected : 비동기 작업 실패 // reject

// Promise 생성
let promise = new Promise((resolve, reject) => {
    // 성공하면 resolve 호출 -> pending -> fulfilled 상태로 변경
    // 실패하면 reject 호출 -> pending -> rejected 상태로 변경
    setTimeout(() => {
        const num = null;
        if( typeof num === "number"){
            resolve(num + 10);
        } else {
            reject("NaN");
        }
    }, 2000);
});

// then 메서드
// -> 그 후에 실행되는 함수
// then, catch, finally 모두 반환값이 똑같은 Promise 객체이므로 체이닝 가능
promise.then((result)=> {
    console.log(result); // 성공했을 때 실행되는 함수, 실패 시 실행되지 않음
}).catch((error)=> {
    console.log(error); // 실패했을 때 실행되는 함수, 성공 시 실행되지 않음
}).finally(()=> {
    console.log("비동기 작업 종료"); // 성공 실패 여부에 관계없이 실행되는 함수
});



// 동적으로 매개변수를 받아서 Promise 객체를 생성하는 함수
function add10(num){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if( typeof num === "number"){
                resolve(num + 10);
            } else {
                reject("NaN");
            }
        }, 2000);
    });
    return promise;
}

const p = add10(0);
// p.then((result)=> {
//     console.log("p", result);
//     // 비동기 함수를 또 호출할 수 있음 -> 하지만 이게 콜백지옥임
//     const newP = add10(result);
//     newP.then((result)=> {
//         console.log("newP", result);
//     })
// }).catch((error)=> {
//     console.log(error);
// });


// Promise 콜백 지옥을 방지하기 위한 방법
add10(0).then((result)=> {
    console.log("first", result);
    return add10(result); // 새로운 Promise 객체를 반환
}).then((result)=> {
    console.log("second", result);
    return add10(result);
}).then((result)=> {
    console.log("third", result);
}).catch((error)=> {
    console.log(error);
}).finally(()=> {
    console.log("비동기 작업 종료");
});
