// Boolean
let bool:boolean
let True: boolean = true
let False:boolean = false



// Number
let N:number
// 정수
let int:number = 10
// 실수
let float:number = 3.14
// 10진수
let dec: number = 24
// 16진수
let hex: number = 0xff
// 2진수
let bin: number = 0b1111
// 8진수
let oct: number = 0o24
// Not a Number
let notANumber: number = NaN
// underscore를 사용한 표기 지원
let underscoreNumL: number = 1_000_000



// String
let str:string
let userName:string = "Choi"



// Array

// 하나의 Type만 가지는 배열의 경우
// 1. 타입의 뒤에 "[]"추가
let array1:number[] = [1, 2, 3]
// 2. Array<타입> 사용, 충돌 가능성이 있으므로 사용을 자제
let array2: Array<number> = [1, 2, 3]

// 둘 이상의 Type을 가지는 경우 -> union type사용 : ()로 타입을 묶어 주어야 함
let unionArray: (number|string)[] = [1, 2, "3"]
// 여러 Tyep에 대해 단언할 수 없는 경우 -> any 사용
let anyArray: any = [1, 2, "3", null, true, [], {}]

// 읽기 전용 배영 생성
// 1. readonly 키워드 사용
let readOnlyArrayKey: readonly number[] = [1, 2, 3]
// 2. ReadonlyArray interface 사용
let readOnlyArrayIF: ReadonlyArray<number> = [1, 2, 3]
// readOnlyArrayKey.push(4) -> 'readonly number[]' 형식에 'push' 속성이 없습니다.ts(2339)
// readOnlyArrayIF[0] = 0   -> 'readonly number[]' 형식의 인덱스 시그니처는 읽기만 허용됩니다.ts(2542)



// Tuple : 길이가 정해져 있으며, 자리마다 특정 타입을 명시한 Type

// "[]"사이에 ","을 기준으로 자료형을 명시
let tuple1:[string, number]

tuple1 = ["Korean", 100]
// tuple1 = ["Korean", 100, 200]  -> '[string, number, number]' 형식은 '[string, number]' 형식에 할당할 수 없습니다.
// tuple1 = [100, "Korean"]       -> 'number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322), 'string' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)

// 명시한 type에 대해 push() method로 tuple에 값을 추가하는 것은 가능. 단 명시하지 않은 type에 대해서는 불가능
tuple1.push(200)             
// tuple1.push(false)             -> 'boolean' 형식의 인수는 'string | number' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

// Tuple을 원소로 하는 배열
let users:[number, string][]
users = [[1, "A"], [2, "B"]]



// Any : 모든 Type에 대해 할당 가능
let any:any
any = 1
any = null
any = undefined
any = "string"



// unknown : Type을 알 수 없는 경우에 대해 사용 가능
// any와 마찬가지로 아무 값이나 할당이 가능. But, any와 달리 기본적으로 다른 변수의 값으로 할당하는 것이 불가능

let unknown: unknown = false
// unknown이 boolean값을 가졌음에도 boolean type의 변수에 할당 물가
// let boolValue:boolean = unknown -> 'unknown' 형식은 'boolean' 형식에 할당할 수 없습니다.ts(2322)

// unknown타입의 변수 사용 방법
// 1. as 키워드를 통해 타입을 명시 -> 단 Type 안전성이 깨질 수 있음
let boolValue:boolean = unknown as boolean

// 2. Type Guard를 통해서 타입을 한정
// Simple Type Guard
if(unknown === true){
  // TypeScript는 위의 식을 토대로 maybe의 타입이 boolean으로 예측
  // maybe의 타입이 boolean으로 예측 되었기에 boolean타입의 변수에 할당 가능
  boolValue = unknown
}
// typeof Type Guard
if(typeof(unknown) === 'boolean'){
  boolValue = unknown
}



// Object

let obj:object = {}
let arr:object = []
let date:object = new Date()

// 실제 JS에서 null에 대해 typeof를 사용하면 object로 나옴
// 그러나 tsconfig.json의 compilerOptions.strict의 값을 "true"로 준 경우 object type의 변수에 null을 할당 할 수 없음
// let nul:object = null  -> 'null' 형식은 'object' 형식에 할당할 수 없습니다.ts(2322)


let user: {id:number, name:string} = {
  id: 1,
  name: "name",
  // age: 24 -> 개체 리터럴은 알려진 속성만 지정할 수 있으며 '{ id: number; name: string; }' 형식에 'age'이(가) 없습니다.ts(2353)
}



// Union

let union:(string|number) // 혹은 let code:string|number

union = 123      // OK
union = "hello"  // OK
// union = true  -> 'boolean' 형식은 'string | number' 형식에 할당할 수 없습니다.ts(2322)



// Function

// func1 : number type의 x, y라는 두 args를 받아 그 합(number)를 반환 
const func1 = (x:number, y:number):number => {
  return x + y
}

// func2 : "Hello World"를 출력.(반환 값이 없음)
const func2 = ():void => {
  console.log("Hello World")
}



// Null & Undefined

let u:undefined = undefined // -> typeof 사용 시 undefined
let n:null = null           // -> typeof 사용 시 object

// strictNullChecks옵션이 true이므로 string타입의 변수에 null을 대입할 수 없음
// let nullStr:string = null -> 'null' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)

// Union type을 통해 null or undefined값 할당 가능
let strOrNull: string | null = null
let strOrUndef: string | undefined = undefined

// void번수 사용 시 : undefined할당 가능
let v:void
v = undefined



// Void

// 반환 값이 없는 함수 -> undefined를 반환(void로 명시)
const voidFunc = ():void => {}
console.log(voidFunc()) // -> undefined 출력



// Never
// 절대 발생하지 않는 값을 표현

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