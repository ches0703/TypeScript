function helloString(msg: string): string {
    return msg
}

function helloNumber(msg: number): number {
    return msg
}
// 위와 같이 각각의 타입에 비슷한 로직을 가진 함수들이 존재할 수 있음
// -> 비슷한 로직이 많이 반복될 수 있음




// 위의 문재를 해결하고자 any type을 사용한다면...

// 위와 같이 모든 타입에 대해 작성할 필요는 없지만
// 함수의 결과를 이용하여 각 타입에서 고유적으로 사용하는 Method를 사용 한다면
// 런타임 중 Error가 발생할 수도 있다  
function hello(msg: any): any {
    return msg
}

// Ex) 함수가 number type을 반환 하지만 string type이 사용할 수 있는 "length"를 사용한 경우
// -> 컴파일 중에는 length는 any로 해석되어 Error를 일으키지는 않지만
// 런타임 중에는 undefined라는 값이 출력되게 된다.
console.log(hello(24).length)

// -> 정상 작동은 하지만 컴파일 단계에서 length가 any type으로 해석 됨
console.log(hello("Ches").length)  




// Generic : Generic(T)를 타입변수처럼 활용하여 T가 string이면 반환값도 string
// number면 반환값도 number로 반환 값의 type을 명확히 추론할 수 있다.
function helloGeneric<T>(msg: T): T{
    return msg
}

// console.log(helloGeneric(24).length) -> Error : number type은 length를 사용할 수 없으므로

// any와 달리 반환값의 type을 명확히 알수 있으므로 length는 number로 추론된다.
console.log(helloGeneric("Ches").length)


