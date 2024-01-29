
// 해당 코드의 경우 TS가  bodyElement1이 HTMLBodyElement 혹은 null Type이라고 추론
const bodyElement = document.querySelector("body")
// 따라서 아래의 코드의 경우 다음과 같은 오류가 발생함 
// bodyElement.innerText = "Hello" -> -> 'bodyElement'은(는) 'null'일 수 있습니다.ts(18047)


// Assertion

// as 키워드를 통해 querySelector의 결과가 HTMLBodyElement라는 것을 지정
const bodyElementWithAs = document.querySelector("body") as HTMLBodyElement
bodyElementWithAs.innerText = "Hello"

// '!'를 통해 bodyElement가 null 혹은 undefined가 아님을 명시
bodyElement!.innerText = "Hello"

// Assertion의 경우 다음과 같은 오류 발생 가능
const func1 = (arg:(string|null)) => {
  return (arg as string).toLowerCase()
}

func1("Hello")  // OK
func1(null)     // TS 문법상 OK. But, 런타임 오류 발생





// Type Guard
if(bodyElement !== null) {
  bodyElement.innerText = "Hello"
}

let any:any = 10
let num:number

// Simple Type Guard
if(any === 10){
  num = any
}
// typeof Type Guard
if(typeof(any) === 'number'){
  num = any
}