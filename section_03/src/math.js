// math 모듈
// add, sub 함수를 정의
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// add, sub 함수를 내보내기
// module.exports = { 
//     add, 
//     sub
// };

// type을 module로 변경하면 export default 사용 가능
// module은 기본적으로 commonjs 모듈 시스템을 사용하기 때문에 export default 동시에 사용 불가
// export { 
//     add, 
//     sub
// };

// 또는 함수 앞에 export 붙이거나 export default 내보내기



export default function multiply(a, b) {
  return a * b;
}