// 함수 선언식
function greeting(){
    console.log("함수");
}

greeting();

// 함수 표현식 
// 호이스팅 불가넝

var annoymous = function(){
    console.log("익명 함수");
}

annoymous();


let arrow1 = () => 1;

let arrowplus = (a,b) => a+b;

let arrowminus = (a,b) => {
    return a-b;
}

console.log(arrow1());
console.log(arrowplus(1,2));
console.log(arrowminus(1,2));