// Void : 어떤 타입도 가지지 않는 빈 상태
// 값은 없고 타입만 존재
// undefined와 비슷함
// 주로 리턴타입으로 사용

function returnVoid(msg:string):void{
    console.log(msg)
}

// 함수의 리턴값이 void이므로 
// 다음 코드와 같은 사용이 불가능 하다 -> 타입안전성이 올라감
// const r:string = returnVoid("No return")
