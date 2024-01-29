// Getter & Setter
// Property의 경우 class의 사용목적인 캡술화를 달성하기 위해 접근지정자가 private인 것을 권장함
// 다만 Property가 private로 선언된다면 따로 값을 받거나 수정하는 Methodr가 필요


class Person05{
    public constructor(private _name: string, private _age: number) { }
    
    // Getter : 객체로 부터 데이터를 받는 Method
    public getName(): string {
        return this._name
    }
    public getAge(): number {
        return this._age
    }

    // Setter : 객체의 Property의 값을 설정하는 Method
    public setName(name: string): void {
        this._name = name
    }
    public setAge(age: number):void {
        console.log(`Set Age : ${this._age} -> ${age}`)
        this._age = age
    }

}

const person05_1 = new Person05("Ches", 24)

// Getter를 이용한 객체의 _name 데이터 받기
console.log(person05_1.getName())

// setter를 이용한 객체의 _age 데이터 수정
person05_1.setAge(25)

console.log(person05_1)