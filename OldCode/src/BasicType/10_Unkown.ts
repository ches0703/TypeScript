// Unkown
// 응용프로그램 작성 시 타입을 알 수 없는 변수를 사용할 경우가 생길 수도 있다
// 이러한 값은 "동적 콘텐츠"라고 하며, 이를 활용하기위해 unkown을 사용함
// any와 비슷하나 any가 가지는 문제점을 해결함

// Unkown & any
// nuknown type의 변수에 할당은 any와 마차가지로 아무 값이나 할당이 가능 함
// Type Guard를 통해서 타입을 한정 시켜야만 unkown타입의 변수 사용 가능(any와 차이점)
// -> 따라서 any대신 unknown을 사용하면 런타임 에러를 줄일 수 있음


// Unknowm 선언 : [변수의종류] [변수 이름]:unkown
let maybe:unknown


// TypeGuard 없이 사용하면 Error(any키워드를 사용한다면 가능 함)
// const str:string = maybe


// Type Guard(Simple ver)
if(maybe === true){
    // TypeScript는 위의 식을 토대로 maybe의 타입이 boolean으로 예측
    // maybe의 타입이 boolean으로 예측 되었기에 boolean타입의 변수에 할당 가능
    const Bool:boolean = maybe
}


// Type Guard(typeof Type Guard)
if(typeof maybe === 'number'){
    const num:number = maybe
}
