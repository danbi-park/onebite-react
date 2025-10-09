// 1. Date 객체 생성
let date = new Date(); // 내장 함수
console.log(date);

// 2. Date 객체 생성
// 날짜 문자열을 전달하여 생성
// YYYY-MM-DD, 
// YYYY/MM/DD, 
// YYYY.MM.DD, 
// YYYY-MM-DDTHH:MM:SS, YYYY/MM/DD HH:MM:SS, YYYY.MM.DD HH:MM:SS
let date2 = new Date("2025-01-01");
console.log(date2);

// 콤마로 구분 가능 
let date3 = new Date(1997, 1, 21, 23, 59, 59);

// 타임 스탬프
// 특정 시간이 경과한 시점을 나타내는 숫자
let ts1 = date2.getTime();
console.log(ts1);

// 타임 스탬프를 날짜로 변환 => date2와 동일함
let date4 = new Date(ts1); 
console.log(date4);


// 3. 시간 요소들을 추출하는 방법
let year = date2.getFullYear();
let month = date2.getMonth() + 1; // JS에서 월은 0부터 시작함 ;; 그래서 +1을 해줘야함
let day = date2.getDate();
let hour = date2.getHours();
let minute = date2.getMinutes();
let second = date2.getSeconds();
// console.log(year, month, day, hour, minute, second);


// 4. 시간 수정하기
date2.setFullYear(2026);
date2.setMonth(11); // 12월은 11로 설정해야함!!!!!!
date2.setDate(1);
date2.setHours(0);
date2.setMinutes(0);
date2.setSeconds(0);
console.log("date2", date2);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date2.toDateString()); // Tue Dec 01 2026 => 시간을 제외한 날짜 출력
console.log(date2.toLocaleString()); // 2026. 12. 1. 오전 12:00:00 => 현지화된 형태로 출력
