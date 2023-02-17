// Array : TypeScript는 배열 요소의 타입이 같도록 명시할 수 있음
//          -> union type으로 다른 여러타입으로 명시할 수 있음

// 1. 타입의 뒤에 "[]"추가
let array1:number[] = [1, 2, 3]

// 2. Array<타입> 사용, 충돌 가능성이 있으므로 사용을 자제
let array2: Array<number> = [1, 2, 3]

// union type사용 : ()로 타입을 묶어 주어야 함
let u_array: (number|string)[] = [1, 2, "3"]
