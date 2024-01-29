// Type Alias

// intersection 사용
// type Animal = {
//   name: string
// }

// type Bear = Animal & {
//   honey: boolean
// }


// const honeyBear: Bear = {
//   name: "honeyBear",
//   honey: true
// }


// Union
// type Animal = {
//   name: string
// }

// type Bear = {
//   honey: boolean
// }

// type NewType = Animal | Bear

// const honeyBear: NewType = {
//   name: "honeyBear",
//   honey: true
// }



// -------------------------------------------------------- //



// interface

// extends 사용
// interface Animal {
//   name: string
// }

// interface Bear extends Animal{
//   honey: boolean
// }

// const honeyBear: Bear = {
//   name: "honeyBear",
//   honey: true
// }


// 선언 병합
// interface Animal {
//   name: string
// }

// interface Animal{
//   honey: boolean
// }

// const honeyBear: Animal = {
//   name: "honeyBear",
//   honey: true
// }


// Union
// interface Animal {
//   name: string
// }

// interface Bear {
//   honey: boolean
// }

// type NewType = Animal | Bear

// const honeyBear: NewType = {
//   name: "honeyBear",
//   honey: true
// }


