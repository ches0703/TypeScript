// 기존 방식

// const getArrayLength = (arr: number[]|string[]|boolean[]):number => {
//   return arr.length
// }

// const arr1 = [1, 2, 3]
// const arr2 = ["A", "B", "C", "D", "E"]
// const arr3 = [true, false, true]

// getArrayLength(arr1)
// getArrayLength(arr2)
// getArrayLength(arr3)


// Generic을 사용한 경우

// const getArrayLength = <T>(arr:T[]):number => {
//   return arr.length
// }

// const arr1 = [1, 2, 3]
// const arr2 = ["A", "B", "C", "D", "E"]
// const arr3 = [true, false, true]

// getArrayLength<number>(arr1)
// getArrayLength<string>(arr2)
// getArrayLength<boolean>(arr3)



// any 대신 Generic을 사용하는 방법

// any 사용 시 
// interface Vehicle {
//   name: string,
//   color: string,
//   option: any
// }

// const car:Vehicle = {
//   name: "car",
//   color: "red",
//   option: {
//     price: 100
//   }
// }

// const bike:Vehicle = {
//   name: "bike",
//   color: "blue",
//   option: true
// }

// Generic 사용 시
interface Vehicle<T> {
  name: string,
  color: string,
  option: T
}

const car:Vehicle<{price: number}> = {
  name: "car",
  color: "red",
  option: {
    price: 100
  }
}

const bike:Vehicle<boolean> = {
  name: "bike",
  color: "blue",
  option: true
}



// Diff with any

const anyFunc = (prop:any):any => {
  return prop
}
console.log(anyFunc(20).length) // -> 컴파일 에러 X, 오류 발생 X
                                // -> But, undefined 값을 가짐 -> 예상치 못한 오류가 발생할 수 있음  

const genericFunc = <T>(prop: T):T => {
  return prop
}
// console.log(genericFunc(20).length) -> Generic을 쓰면서 TS가 Type 추론을 할 수 있음
//                                        따라서 컴파일 에러 발생   



// 둘 이상의 Generic

const makeArr = <X, Y>(x:X, y:Y):[X, Y] => {
  return [x, y]
}

const arr1 = makeArr<number, number>(4, 5)
const arr2 = makeArr<string, string>("A", "B")
const arr3 = makeArr<number, string>(6, "C")
const arr4 = makeArr<string, number>("D", 7)



// extends

const makeFullName = <T extends {firstName:string, lastName:string}>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + obj.lastName
  }
}

makeFullName({firstName: "Hello", lastName: "World", email: "XXXX0000@yyyy.com"})
makeFullName({firstName: "Hello", lastName: "World", phone: "000-0000-0000"})