


class Person02{
    // constructor(생성자)를 통한 initialize 필요(따로 없을 시 default생성자가 불림)
    // constructor를 통해 Property를 init을 하지 않은 경우 Error말생 : "strict"옵션에 의해 
    // 단 "!"가 있다면 constructor를 통한 초기화가 필요 없음(차후에 처리 가능) -> 사용시 주의 필요
    name: string = "Ches"   // -> Defalut 값을 줄 수 있음
    age!: number

    // 주의! : TypeScript(JS 포함)에서는 함수 오버로딩을 지원하지 않음 -> 즉 하나의 클래스에 하나의 생성자만
    // 또한 async를 설정할 수 없다

    // 생성자 case1 : 이름과 나이를 둘 다 입력하는 경우
    // constructor(name: string, age:number){
    //     this.name = name
    //     this.age = age
    // }

    // 생성자 case2 : 나이만 입력받거나, 입력이 없는 경우
    constructor(age?: number) {
        // age값을 받지 못한경우 -> 생성 시 Args를 하나도 안준 경우
        if(age === undefined){
            this.age = 0
        }
        // age값을 받은 경우
        else{
            this.age = age
        }
    }
    


}

const person02_1: Person02 = new Person02(24)
const person02_2: Person02 = new Person02()
console.log(person02_1)