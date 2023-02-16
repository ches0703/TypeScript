// Static
// Static Property : 객체를 생성하지 않아도 사용가능한 변수, 해당자료형을 가진 객체는 모두 공유함
// Static Method : 객체를 생성하지 않아도 사용가능한 함수, 해당자료형을 가진 객체는 모두 공유함
// 클래스명.static(Property or Method) 형식으로 사용

class Person08{
    // Static Property
    public static country = "Korea"
    // Static Method
    public static hello():void {
        console.log("Hello")
    }

    public getCountry():string {
        return Person08.country
    }

    private _name: string
    public age?: number
    public constructor(name: string){
        this._name = name
    }
}
// Static Property 사용
console.log(Person08.country)
// Static Method 사용
Person08.hello()

const person08_1 = new Person08("Ches")
console.log(person08_1.getCountry())

// Static Property를 변경 시
Person08.country = "US"
// 해당 자료형을 가지 객체의 데이터또한 변경 : Static Property는 공유됨
console.log(person08_1.getCountry())