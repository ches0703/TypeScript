// Extends(inheritance)


class Parent {
    // Protected : 상속 관계에서만 접근 가능
    constructor(protected _name: string, private _age: number) {}
    
    public print():void {
        console.log("name : ", this._name)
        console.log("age : ", this._age)
    }
}

// Parent를 상속 받는 Child
// Overriding : 상위 클래스가 가지고 있는 Method나 Property를 하위 클래스가 재정의해서 사용
class Child extends Parent {

    public gender = "male"

    // 상속을 받는 경우 Dfault생성자는 부모(super) class의 생성자를 따름
    // constructor 사용시 super라는 키워드를 통해 부모클래스의 생성자를 호출 하여 주어야 함
    
    // Property의 Overriding : public _name:string
    constructor(public _name:string, age: number) {
        super(_name, age)       
    }

    // Method의 Overriding
    public print():void {
        console.log("name : ", this._name)
        // age는 Parent의 Private 속성이므로 출력 불가
        // console.log("age : ", this._age)
        console.log("gender : ", this.gender)
    }

}


const p: Parent = new Parent("Mark", 39)
// Parent의 _name은 protected이고, 이는 private와 마찬가지로 class의 외부에서는 사용이 불가능 하다
// console.log(p._name) -> Error
p.print()


const c: Child = new Child("Son", 10)
// c는 Parent를 상속받는 Child type이므로 Parent의 print()사용 가능
c.print()
console.log(c)
