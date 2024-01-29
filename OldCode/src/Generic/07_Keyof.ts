// Keyof




interface IPerson_G {
    name: string
    age: number
}

const person: IPerson_G = {
    name: "Ches",
    age: 24
}

// 객체의 Property의 값을 받아오는 함수
function getProperty(obj: IPerson_G, key: "name" | "age"): string | number {
    return obj[key]
    // key를 "name"으로 준 경우 return 값의 type은 string이지만
    // 선언에서 union type으로 선언 하였기에 number가 될 수도 있다.
    // 반대의 경우도 마찬가지
}


// 객체의 Property의 값을 받아오는 함수
function setProperty(obj: IPerson_G, key: "name" | "age", value: string | number): void{
    // key가 "name"인 경우 value는 string이여야만 하고,
    // "age"인 경우 number여야 한다.
    // 그러나 선언식을 보면 key가 "name"이여도 value가 string으로 들어올 수 있기에 Error가 발생한다
    // obj[key] = value -> Error
}


// 위 두함수의 공통점 getProperty의 경우 key와 return값이, 
// setProperty의 경우 key와 value가 서로 관걔를 가진다 




// keyof : 객체가 가지는 Property의 이름을 추출하여 union의 형태로 반환
type Keys = keyof IPerson_G

// keyof를 이용하여 위의 로직 개선
// keyof IPerson_G = "name" | "age"을 바탕으로
function getProperty2(obj: IPerson_G, key: keyof IPerson_G): IPerson_G[keyof IPerson_G] {
    return obj[key]
}

function setProperty2(obj: IPerson_G, key: keyof IPerson_G, value: string | number): void{
   // obj[key] = value
}
// 근본적인 문제가 해결이 되지 않음 




// Generic을 이용하여 위의 로직 개선
// T = IPerson_G, K = "name" | "age" 이기에 K를 key로 받기에 name에는 string, age에는 number가 고정 됨
function getProperty3<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

function setProperty3<T, K extends keyof T>(obj: T, key: K, value: T[K]): void{
   obj[key] = value
}


// 런타인 이전에 에러를 잡을 수 있음