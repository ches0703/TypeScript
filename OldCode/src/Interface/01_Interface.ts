// Interface를 통한 타입 생성
interface Person1{
    name:string,
    age:number
}


function hello1(person:{name:string, age:number}):void{
    console.log(`Hello! I'm ${person.name}`)
}
const p1:{name:string, age:number} = {
    name: "Ches",
    age: 24
}

// Interface를 사용하여 만든 타입을 적용
function hello1_i(person:Person1):void{
    console.log(`Hello! I'm ${person.name}`)
}
const p1_i:Person1 = {
    name: "Ches",
    age: 24
}


hello1(p1)
hello1_i(p1_i)