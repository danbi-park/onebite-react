// 전역 스코프 : 전체 영역에서 접근 가능
// 지역 스코프 : 해당 함수 내에서만 접근 가능

let a = 1;

function scope(){
    let b = 2;
    console.log(a);
    console.log(b);
}

scope();

if(true){
    let c =1;
}


(function(){

    let d = 2;
    console.log(d);

})();