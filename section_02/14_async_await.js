// async, await

// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData(){
    return {
        name: "박단비",
        id: "danbineer",
    }
}

// 아래와 같이 어쨋든 Promise를 반환한다면 async 키워드는 아무 동작 안함.
async function getData2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve({
                name: "박단비",
                id: "danbineer",
            })
        }, 2000);
    })
}

console.log(getData2()); // Promise 객체가 반환된다! (성공, 객체 반환함)

// 따라서 async 를 사용하려면 Promise를 굳이 반환하지 않는 그런 함수에 써야 목적대로 쓰이는 거임.
// async는 await 과 사용했을 때 그 진가를 발휘한다.. 

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData(){
   // await 키워드는 비동기 함수가 완료될 때까지 기다리고, 완료되면 프로미스의 결과값을 반환한다.
   const data = await getData2();
   console.log(data);
}

printData();