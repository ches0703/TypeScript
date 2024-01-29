// Optional Property

interface Person2{
    name:string,
    // age가 있거나 없을수도 있는 형태라면 -> "?"를 뒤에 붙여 선언
    age?:number,
    // 어떤 이름의 Property가 와도 허용 될 때
    [index: string]: any
}

function hello2(person:Person2) {
    console.log(`Hello! I'm ${person.name}`)
}
hello2({name:"Ches", age:24})
// age는 필수 속성이 아니므로 Person2의 형태를 받는 hello2에 다음과 같은 형식이 허용됨
hello2({name:"Ches"})   

// JS & TS에서는 객체의 property를 접근할 때 indexabel로 접근 가능함
// 이를 활용하여 같은 type이라도 각 객체의 특정 property를 주는 것이 가능함 : [index: string]: any 사용을 통해
console.log({name:"Ches", age:24}["name"])

const p2:Person2 = {
    name: "Ches",
    // 따로 age를 성정 안하여도 됨 : Person2선언 시 age?:number로 age를 선언하였기 때문
    // age: 24,
    family_name: "Choi",    // [index: string]: any를 통해 원하는 property를 중 수 있음
    Grade : 4.5             // 여러게의 원하는 property를 줄 수 있음
}
hello2(p2)

