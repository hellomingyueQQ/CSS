// 模块文件：math.js

// 导出一个加法函数
export function add(a, b) {
    return a + b;
}

// 导出一个乘法函数
export function multiply(a, b) {
    return a * b;
}
`````javascript
// 主文件：main.js

// 导入math.js模块中的add和multiply函数
import { add, multiply } from './math.js';

// 使用导入的函数
console.log(add(2, 3)); // 输出 5
console.log(multiply(2, 3)); // 输出 6
