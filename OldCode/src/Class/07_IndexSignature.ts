// IndexSignature
// Property의 이름이 동적일 경우 사용

// 학생의 이름과 성별을 Property로 같는 class Student
// Ex) {mark: "Male", Jade: "Male", Anna: "Female"}
// 새로운 학생의 정보 추가가 불가능 -> Index Signature을 사용하여 해결

class Students {
    // [Property의 이름: string] : 해당 Property가 가지는 Type
    // [name: string]: string
    // 다만 성별의 경우 "Male" 혹은 "Female"값만 받으므로 다음과 같이 표현 가능
    [name: string]: "Male" | "Female"
}

const A: Students = new Students()
A.mart = "Male"
A.Jade = "Male"
A.Anna = "Female"

console.log(A)