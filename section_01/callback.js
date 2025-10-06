function main(value){
    value(); // 원하는 곳에서 콜백함수를 호출할 수 있음
}

// 콜백함수로 
function sub(){
    console.log("i am sub");
}


// main(sub);
main(() => {
    // console.log("i am sub")
}
);


function repeat(count, callback){
    for(let i = 1; i <= count; i++){
        callback(i);
    }
}


repeat(5, (i)=> console.log(i));

repeat(5, (i)=> console.log(i * 3));