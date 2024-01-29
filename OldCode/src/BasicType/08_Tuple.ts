// Tuple : 길이가 정해져 있으며, 자리마다 특정 타입을 명시한 것
// "[]"사이에 ","을 기준으로 자료형을 명시
let x:[string, number] = ["Korean", 100]

console.log("x = ", x)  // -> [ 'Korean', 100 ]

// x = [75, 65] // -> 명시된 타입과 다른 데이터를 넣음

// 배열처럼 인덱싱 가능
console.log("x[0] =", x[0]) // -> korean
console.log("x[1] =", x[1]) // -> 100
