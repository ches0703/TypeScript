// Abstract Class
// 완전하지 않은 class -> new를 통한 생성 불가
// 단 상속을 통해 활용 가능 

abstract class AbsPerson {

    // Abstract class의 Property
    protected abstract _name: string

    // Abstract class의 Method : 함수의 형태만 선언
    // 따로 구현 하지 않으며, 상속받는 class가 Overriding을 통해 따로 구현을 하여야 함
    public abstract setName(name: string): void

}

class Person11 extends AbsPerson{
    // Property의 Overriding
    protected _name: string = "ches"

    // Method의 Overriding
    public setName(name: string): void {
        this._name = name
    }
}

// abstract class는 new를 통한 생성 불가
// new AbsPerson()

const person11_1 = new Person11()
console.log(person11_1)
person11_1.setName("Ches")
console.log(person11_1)
