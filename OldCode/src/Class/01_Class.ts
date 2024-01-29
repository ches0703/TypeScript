// class 선언(Declaration) : class 키워드를 이용하여 클래스를 만들 수 있다
// class의 이름은 보통 Pascal case를 따른다
// new 라는 키워드를 통해 class를 기반으로 Object를 생성한다
// this를 이용하여 생성된 Object를 가리킬 수 있다
// ES6에서는 class를 그대로 compile하지만 이전 버젼의 경우 funtion의 형태로 compole이 됨
class Person01{
    // Proeperty
    name: string
    // 생성자
    constructor(name: string){
        this.name = name
    }
}

const person01_1: Person01 = new Person01("Ches")
console.log(person01_1)