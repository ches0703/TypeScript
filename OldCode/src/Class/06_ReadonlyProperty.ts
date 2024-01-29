// Readonly Property

class Person06{
    // readonly 키워드가 있는 property는 constuctor 혹은 선언 시에만 값을 할당 가능하다. 
    // 초기화는 클래스 생성시에만 이루어지고 차후에는 상수처럼 활용
    private readonly _gender: string = "Male"
    private _name: string
    private _age: number

    constructor(name: string, age: number){
        this._name = name
        this._age = age
        // constructor에서 readonly Property 초기와
        this._gender = "Male"
    }

    public Gender(gender: string):void {
        // private로 클래스 내부 어디에서든 값을 읽는 것은 허용
        console.log(this._gender)
        // 단 값을 재할당 하는것은 불가능
        // this._gender = "Female" -> Error
    }

}
