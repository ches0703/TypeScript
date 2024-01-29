// Partial
// 특정 Type의 부분집합을 만족하는 Type을 정의
interface Address {
  email: string,
  address: string
}

const me:Partial<Address> = {}
const you:Partial<Address> = {email: "xxxx0000@yyyy.com"}
const all:Partial<Address> = {email: "xxxx0000@yyyy.com", address: "KR"}



// Pick
// 특정 Type에서 몇개의 property를 선택하여 Type 정의
// interface Todo {
//   title: string,
//   description: string,
//   completed: boolean
// }

// type TodoPreview = Pick<Todo, "title" | "completed">

// const todoPreview:TodoPreview = {
//   title: "Clean",
//   completed: false,
// }



// Omit
// 특정 Type에서 몇개의 property를 제거한 Type 정의

interface Todo {
  title: string,
  description: string,
  completed: boolean
}

type TodoPreview = Omit<Todo, "description">

const todoPreview:TodoPreview = {
  title: "Clean",
  completed: false,
}


// Exclude
// Union Type에서 제거할 Type을 지정
type myUnion = string | number | boolean
const notString:Exclude<myUnion, string> = 0
const onlyBoolean:Exclude<myUnion, string | number> = true


// Required
// Optional Property 표시를 무시 -> 모든 Property를 필수로 만듦
type User = {
  firstName: string,
  lastName?: string
}

const user1:User = {
  firstName: "Hello"
}

const user2:Required<User> = {
  firstName: "Hello",
  lastName: "World"
}


// Record
// Type의 Property를 다른 Property에 Mapping하는 데 사용
interface Val {
  id: number,
  data: string
}

type Keys = "A" | "B" | "C"

const datas: Record<Keys, Val> = {
  "A" : {id: 0, data:"0"},
  "B" : {id: 1, data:"1"},
  "C" : {id: 2, data:"2"}
}



// ReturnType
// 반환 타입으로 구성된 타입 생성
type T0 = ReturnType<() => string>        // TO = string
type T1 = ReturnType<(s:string) => void>  // T1 = void


const returnString = ():string => {
  return "string"
}

const res:ReturnType<typeof returnString> = returnString()





const something = {}
