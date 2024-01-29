// Type Annotation : 변수에 타입을 지정
// 변수이름:변수타입

let isDone:boolean = false
console.log(typeof isDone)      // -> boolean

let isOk:Boolean = true
console.log(typeof isOk)        // -> boolean




//  TypeScript에서는 Primitive Type를 참조형으로 생성하는 것을 권장하지 않음

let isNotOk_1 = new Boolean(true)
console.log(isNotOk_1)          // -> [Boolean: true], Primitive type과 다름(Object)

// new라는 키워드로 생성한 Boolean은 참조형으로 boolean자료형을 명시한 변수에 대입 불가
// let isNotOk_2: boolean = new Boolean(true)

let isNotOk_3: Boolean = new Boolean(true)
console.log(isNotOk_3)          // -> [Boolean: true], Primitive type과 다름(Object)