// Access Modifier
// Default : Public으로 설정됨
// Public : 외부에서 접근 가능
// Private : 클래스 내부에서만 접근 가능
// Protected : 상속 관계에서만 접근 가능

class Person03{
    // Private로 설정할 시 외무에서 접근 불가
    // Private의 경우 명명시 맨 앞에 암묵적으로 "_"를 붙임(JS에서 private라는 키워드가 없어서 대신 사용, 강요 사항은 아님)
    private _name: string
    
    public age?: number
    public constructor(name: string){
        this._name = name
    }
}


const person03_1: Person03 = new Person03("Ches")

// person의 _name속성은 private이므로 외부 접근이 제한됨 -> Error 발생
// person03_1._name = "ches"

// age의 경우 public이므로 외부에서 접근 가능
person03_1.age = 24
