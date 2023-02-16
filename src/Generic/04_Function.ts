// Generic


// Type Alias와 Generic을 통한 함수의 type 선언
type HelloFunctionGeneric1 = <T>(msg: T) => T

const helloFunction1: HelloFunctionGeneric1 = <T>(msg: T): T => {
    return msg
}



// Interface와 Generic을 통한 함수의 Type 선언
interface HelloFunctionGeneric2 {
    <T>(msg: T):T
}
const helloFunction2: HelloFunctionGeneric2 = <T>(msg: T): T => {
    return msg
}