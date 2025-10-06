// 단락 평가(Short-Circuit Evaluation)
// And 연산자나 Or 연산자에서 특정 값을 반환하는 경우
// 첫 번째 피연산자의 값만으로도 해당 연산의 결과를 확정할 수 있다면 
// 두 번째 피연산자의 값에는 아예 접근하지 않는 자바스크립트의 최적화 기법


function returnFalse(){
    console.log("return False");
    return false;
}

function returnTrue(){
    console.log("return True");
    return true;
}

console.log(returnFalse() && returnTrue()); // return False 값만 나옴(단락 평가)
console.log(returnTrue() && returnFalse()); // 첫 번째 피연산만으로는 결과를 확정할 수 없기 때문에 return False 값도 나옴



function returnUndefined(){
    console.log("return Undefined");
    return undefined;
}

function return10(){
    console.log("return 10");
    return 10;
}

console.log(returnUndefined() || return10()); //Truthy하거나 Falsy한 값도 단락 평가됨


// 활용 사례


function printName(person){
    const name = person && person.name;
    console.log(name || "이름이 없습니다.");
}

printName();
printName({name: "박단비"});