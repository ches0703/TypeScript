// Literal방식으로 오브잭트 생성
const user1:object = {name: "ches", age: 24}

// Object.create를 통한 생성
const user2 = Object.create({name: "ches", age: 24})


// Object : "Primitive type이 아닌 것"을 나타내고 싶을 때 사용
// 따라서 TypeScript에서 object타입에 primtive값을 줄 수 없다 
// let o:object = 10
