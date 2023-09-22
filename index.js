import { readFileSync } from 'fs';
const data = readFileSync('example', 'utf8');
let input = data.split(" ")
console.log(input[0] + input[1]) 

// 업로드용 es6 -> es5 변환기 돌려야함
// import { readFileSync } from 'fs';
// const data = readFileSync('/dev/stdin', 'utf8');
// let input = data.split(" ")
// console.log(input[0] + input[1]) 
// 업로드용
