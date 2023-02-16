// any : 아무 데이터나 들어올 수 있는 타입
// 최대한 쓰지 않는 것을 권장 : 타입 안전성을 잃을 수도 있음

// Parameter로 any type으로 받으며, any type을 반환하는 함수 : returnAny
const returnAny = (message:any):any => message

console.log("returnAny(\"string\") = ", returnAny("string"))
console.log("returnAny(3.14) = ", returnAny(3.14))