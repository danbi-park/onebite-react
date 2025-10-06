// 참 같은 값
if(123) {
    console.log(123, "참");
}

if(1) {
    console.log(1, "참");
}

if("hello") {
    console.log("hello", "참");
}

// 거짓 같은 값
if("") {} else{
    console.log("", "거짓");
}

if(undefined) {} else{
    console.log(undefined, "거짓");
}

if(NaN) {} else{
    console.log(NaN, "거짓");
}

if({}) {} else{
    console.log({}, "거짓");
}

/// 정리

///1. Falsy한 값
let f1 = undefined;
let f2 =null;
let f3 = 0;
let f4 = -0;
let f5 = "";
let f6 = NaN;
let f7 = 0n;

if(f1) {} else{
    console.log(f1, "거짓");
}


///2. Truthy한 값
// 7가지 Falsy한 값을 제외한 나머지 모든 값;

let t1 = 1;
let t2 = -1;
let t3 = "hello";
let t4 = [];
let t5 = {};
let t6 = ()=>{};


if(t2) {
    console.log(t2, "참");
}

// 활용 사례

function printName(person){
    if(!person){ 
        console.log("person is falsy");
    } else{
        console.log(person.name);
    }
}

let person = {
    name: "박단비"
}

printName(person);