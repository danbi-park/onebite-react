// const moduleData = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// const { add, sub} = require("./math");
// package.json의 type을 module로 변경하면 import 사용 가능
// 확장자도 꼭 같이 써줘야함
// import { add, sub } from "./math.js";
// import multiply from "./math.js";
// import mul from "./math.js"; // 이름을 커스텀해서도 가능

import mul, { add, sub } from "./math.js";
import randomColor from "randomcolor"; // 라이브러리 이름만 써주면 됨


console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));

// randomcolor 모듈 사용
console.log(randomColor());
