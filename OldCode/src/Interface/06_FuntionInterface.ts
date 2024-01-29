// interface를 통한 함수의 형태 선언
interface HelloPerson{
    (name: string, age?:number):void
}

// Case 1. Paramter를 name만 주는 경우 : 정상 작동
const helloPerson1:HelloPerson = function(name:string){
    console.log(`Hello I'm ${name}`)
}

// Case 2. Paramter를name과 age?(age가 있을수도 없을수도 있음)을 준 : 정상 작동
const helloPerson2:HelloPerson = function(name:string, age?:number){
    console.log(`Hello I'm ${name}`)
}

// Case 3. Paramter를name과 age를 주는 경우 : Error
// 함수의 interface에서는 age로 받을 수 있는 값은 number or undefined이지만
// 아래의 함수의 Parameter의 age는 number만 답을 수 있기 때문에(반공변성)
// const helloPerson3:HelloPerson = function(name:string, age:number){
//     console.log(`Hello I'm ${name}`)
// }