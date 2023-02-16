// Initialization


class Person04{

    // 기존의 class Initialization및 Property 선언
    // private _name: string
    // private _age: number
    // public constructor(name: string, age: number){
    //     this._name = name
    //     this._age = age
    // }


    // 다음과 같이 Property의 선언과 생성자를 생략 가능
    public constructor(private _name: string, private _age: number) { }

}


const person04_1: Person04 = new Person04("Ches", 24)
console.log(person04_1)