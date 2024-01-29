// readonly : Property의 값을 변경 할 수 없게 함(읽기 전용 속성으로 만듬)
// interface를 통한 class생성 시 에도 이러한 속성을 유지시킬 수 있음

interface User07{
    name: string,
    age?: number
    // gender property를 읽기 전용으로 선언
    readonly gender: string
}

const User07_1:User07 = {
    name: "Ches",
    gender: "Male"
}

// Error : gender은 읽기 전용 속성으로 변경 불가
// User07_1.gender = "Female"
