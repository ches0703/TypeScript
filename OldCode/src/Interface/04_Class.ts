// Make a class with interface
// class를 interface를 통해 생성할 시 사용하는 키워드 : implements 

interface IPerson{
    name:string,
    age?:number,
    hello():void
}

// interface를 통한 클래스 생성 : class선언 시 implements를 사용
// interface를 통해 생성된 class는 interface의 내용을 전부 명시해 주어야 한다
class CPerson implements IPerson{
    name: string
    age: number | undefined

    // constructor(생성자)를 통한 Property의 초기화(initialize)
    // age정보는 있거나 없을 수도 있음
    constructor(name: string, age?:number){
        this.name = name
        this.age = age
    }

    hello(): void {
        console.log(`Hello I'm ${this.name}`)
    }

}

const p4_1:CPerson = new CPerson("Ches", 24)
p4_1.hello()
// 객체의 type을 interface로 주어도 가능, age의 값을 따로 주지 않은 경우
const p4_2:IPerson = new CPerson("Ches")
p4_2.hello()