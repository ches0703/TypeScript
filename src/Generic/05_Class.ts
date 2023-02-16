// Class

// Generic Type의 Property를 가진 class
class GPerson<T, K> {
    private _name: T
    private _age: K

    constructor(name: T, age: K) {
        this._name = name
        this._age = age
    }



}


new GPerson("Ches", 24)
new GPerson(2, 2)      // _name이 Generic(T) type이므로 아무 type이나 들어와도 됨

// Generic의 type을 미리 지정가능
new GPerson<string, number>("Choi", 24)
