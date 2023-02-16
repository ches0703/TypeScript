// Function in interface : Method

interface Person3{
    name:string,
    age:number,
    // Person3 type의 메소드 선언 : 
    // 함수의 이름과 Parameter나 return value의 타입만 정의하며, 내부 logic은 각 객체가 구현 하여야 한다.
    hello():void
}


const p3_1:Person3 = {
    name: "Ches",
    age: 24,
    // 기본 적인 Method 구현
    // TS에서 명시적으로 함수의 this를 선언해 줄 수 있음(생략이 가능, 다만 다른 객체를 대상으로 실행 시 필요) : 
    // hello: function(this:Person3):void{...}
    hello: function():void{
        console.log(`Hello I'm ${this.name}`)
    }
}
p3_1.hello()


const p3_2:Person3 = {
    name: "Ilya",
    age: 20,
    // funtion 키워드 생략
    hello():void{
        console.log(`Hello My name is ${this.name}`)
    }
}
p3_2.hello()

// Allow Function의 경우 내부의 this가 범위를 global로 가지기 때문에 사용 불가
// const p3_3:Person3 = {
//     name: "Ches",
//     age: 24,
//     hello: ():void => {
//         console.log(`Hello I'm ${this.name}`)
//     }
// }