// extends

// Generic에서 extends는 상속의 계념 보단 제한의 게념
// Ex) <T extends string | number> => T는 type으로 string 혹은 number만 가능
class PersonEx<T extends string | number> {
    private _name: T

    constructor(name: T) {
        this._name = name
    }

}

new PersonEx("Mark")
new PersonEx(24)

// extends를 통해 Generic(T)는 number 혹은 string만 가질수 있으므로 Error
// new PersonEx(true)
