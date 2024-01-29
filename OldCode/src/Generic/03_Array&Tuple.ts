// Array

// Generic T type 요소의 배열을 받아 T type을 반환
function helloArr<T>(msg: T[]): T {
    return msg[0]
}

// 문자열 배열을 주는 경우 : T는 string으로 정해짐
helloArr(["Hello", "World"])
// 다음과 같이 사용 가능
helloArr<string>(["Hello", "World"])


// 배열의 요소가 서로 다른 타입인 경우 : union type으로 추론
helloArr(["Hello", 5])  // T = string | number로 추론됨(리턴 type 또한 union)
// 다음과 같이 표현 가능
helloArr<string | number>(["Hello", 5])




// Tuple

function helloTuple<T, K>(msg: [T, K]): T {
    return msg[0]
}

helloTuple(["Hello", "World"])  // T = string, K = string
helloTuple(["Hello", 5])        // T = string, K = number