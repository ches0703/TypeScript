// Basic

// 기본적인 Generic 사용
function helloBasic<T>(msg: T): T{
    return msg
}

// 1. 미리 Generic의 type을 명시하여 : Aruments로 값을 잘못 주는 경우 방지
helloBasic<string>("Ches")

// helloBasic<string>(20) -> Error : 
// Generic type을 string으로 주었지만 number type을 Agumnts로 주었기 때문



// 2. 따로 Generic의 type을 명시하지 않은 경우 : 
// TypeScript의 타입 추론으로 Generic(T)의 type을 추론
helloBasic(24)  // Genric(T) = number로 추론




// 여러게의 Generic를 사용하고싶으면 ","를 구분으로 추가 : <T, U, ...>
function helloBasic2<T, U>(msg1: T, msg2: U): T {
    return msg1
}

// 1. 미리 Generic의 type을 명시할 경우
helloBasic2<string, number>("Ches", 24)

// 2. 따로 Generic의 type을 명시하지 않은 경우
helloBasic2("123", "Hi")   // -> T = number, U는 string으로 type 추론