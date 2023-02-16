// Symbol
// ECMA 2015에 추가된 개념
// new키워드를 통해 생성 불가
// Symbol을 함수로 사용하여 symbol 타입을 만들 수 있음
// "Symbol"키워드에 에러 발생 시 : tsconfig파일읲 "lib"에 "ES2015", "DOM"을 추가 하여야 함

// Primitive타입의 값을 담아서 사용
// 고유하며, 수정불가능한 값으로 만들어 줌
// 주로 접근을 제어하는데 쓰임

// 같은 값을 가지고 있어도 참조형 자료처럼 두 Symbol은 같지 않음
console.log(Symbol("foo") === Symbol("foo"))

// Symbol 사용 예제

// Symbol생성
const sym = Symbol()
// Symbol을 사용하여 객체의 property 설정
const obj = {
    [sym]: "value"
}

console.log(obj[sym])