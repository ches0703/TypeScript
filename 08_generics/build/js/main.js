"use strict";
// 기존 방식
const car = {
    name: "car",
    color: "red",
    option: {
        price: 100
    }
};
const bike = {
    name: "bike",
    color: "blue",
    option: true
};
// Diff with any
const anyFunc = (prop) => {
    return prop;
};
console.log(anyFunc(20).length); // -> 컴파일 에러 X, 오류 발생 X
// -> But, undefined 값을 가짐 -> 예상치 못한 오류가 발생할 수 있음  
const genericFunc = (prop) => {
    return prop;
};
// console.log(genericFunc(20).length) -> Generic을 쓰면서 TS가 Type 추론을 할 수 있음
//                                        따라서 컴파일 에러 발생   
// 둘 이상의 Generic
const makeArr = (x, y) => {
    return [x, y];
};
const arr1 = makeArr(4, 5);
const arr2 = makeArr("A", "B");
const arr3 = makeArr(6, "C");
const arr4 = makeArr("D", 7);
// extends
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + obj.lastName });
};
makeFullName({ firstName: "Hello", lastName: "World", email: "XXXX0000@yyyy.com" });
makeFullName({ firstName: "Hello", lastName: "World", phone: "000-0000-0000" });
