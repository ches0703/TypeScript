// Never : 절대 발생하지 않는 값을 표현, 일반적으로 return에 사용 됨
// never은 모든 타입의 subtype이며, 모든 타입에 할당 가능
// but 어떠한 값도 never에는 할당 불가
// 잘못된 타입을 넣는 실수를 막고자 할때 사용

// Parameter로 string타입을 받고 never라는 타입을 반환하는 함수 : 반환값이 없는 함수
const error = (message: string):never => {
    // throw사용시 함수가 종료 됨 -> 즉 반환값이 없음
    throw new Error(message)
}


// return을 error로 줄 시 error가 never타입을 반환하는 함수이므로
// TS에서 fail이라는 함수도 never을 리턴하는 함수로 추론함
const fail = () => {
    return error("failed")
}


// 무한 반복을 하므로 따로 반환값이 없음 -> never을 리턴하는 함수로 추론 가능
const infiniteLoop = ():never => {
    for(;;){}
}


let a:string = "Hello"
if(typeof a !== "string"){
    // a는 string타입, but 현재 if문 에서는 a가 string타입일 수 없으므로
    // TS에서 a는 never type으로 추론, a매 값을 넣는 것을 방지함
    a
}
