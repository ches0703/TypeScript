// Singleton : class로 부터 단 하나의 객체만 생성 되게 하는 것


class Singleton{

    // 초시값은 null로 주되 getInstance() Method 사용 시 Singleton type을 가지므로 유니온타입 사용
    private static instance: null | Singleton = null

    // 객체 생성 & 반환 Method
    public static getInstance(){
        // Logic
        // Singleton 으로부터 생성된 객체가 없다면 -> 새로 생성하여 return Singleton.instance
        // Singleton 으로부터 생성된 객체가 존재 한다면 -> return Singleton.instance 
        if(this.instance === null){
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }

    // 생성자의 접근 지정자를 private로 주어서 새로운 객체 생성을 막아야 함
    private constructor() {}

}


const first: null | Singleton = Singleton.getInstance()   // 새로운 Singleton 객체를 생성하여 할당 받음
const second: null | Singleton = Singleton.getInstance()  // 위의 코드에 의해 만들어진 객체를 값으로 받음

console.log(first === second)   // -> true(같은 객체를 가르키므로)

