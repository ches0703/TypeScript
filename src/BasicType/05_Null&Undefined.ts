// Null : 의도적으로 값을 비운 데이터
// Undefined : 의도치 않게 값이 없는 데이터
// 기본적으로 unll과 undefined는 모든 자료형의 서브 타입 : 모든 타입의 변수에 대입 가능
// 컴파일 옵션에서 "strictNullChecks"(tsconfig파일에서 설정가능, default로 true의 값을 가짐)를 
// 사용하면 다른 타입의 변수에 할당 불가.(단 undefined는 TypeScript의 void에는 할당 가능 함)
//      -> 이 경우, null과 undefined를 할당할 수 있게 하려면 union type을 써야 함


// TypeScript 사용 예시
let u:undefined = undefined // -> typeof 사용시 undefined라고 나옴
let n:null = null           // -> typeof 사용시 object라고 나옴


// strictNullChecks옵션이 true이므로 string타입의 변수에 null을 대입할 수 없음
// let str:string = null


// void번수 사용 시 : undefined할당 가능
let v:void
v = undefined


// Union type : 여러개의 타입을 가질수 있는 타입
// 변수 이름: [타입] | [타입] ...
let union: string | null = null
console.log(union)          // -> null
console.log(typeof union)   // -> object


union = "Ches"
console.log(union)          // -> Ches
console.log(typeof union)   // -> string

