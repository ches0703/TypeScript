// extends

interface User{
    name: string,
    age?: number
}

// User를 상속받는 VIP
// User의 property 혹은 Method에 VIP만의 property 혹은 Method를 추가
interface VIP extends User{
    Grade: number
}

const ches:VIP = {
    name: "Ches",
    age: 24,
    Grade: 1
}