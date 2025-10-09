// 음식을 주문하는 함수
function orderFood(callback){
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 2000);
}

function cooldownFood(food, callback){
    setTimeout(() => {
        const cooldownFood = `식은 ${food}`;
        callback(cooldownFood);
    }, 1000);
}

function freezeFood(food, callback){
    setTimeout(() => {
        const freezeFood = `냉동된 ${food}`;
        callback(freezeFood);
    }, 1500);
}

orderFood((food)=> {   
    console.log(food);
    cooldownFood(food, (cooldownFood)=>{
        console.log(cooldownFood);
        freezeFood(cooldownFood, (freezeFood)=>{
            console.log(freezeFood);
        });
    });
});

// 콜백함수에서 indent가 계속 깊어지면 코드의 가독성이 떨어진다. => 콜백지옥
// 이럴 때 콜백함수를 사용하는 대신 Promise를 사용하면 코드의 가독성을 높일 수 있다.