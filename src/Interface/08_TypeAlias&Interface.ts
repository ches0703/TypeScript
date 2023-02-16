// Type Alias VS Interface
// Type Alias는 class나 Interface한테 상속을 못함
// Interface는 extends를 통해 같은 interface에게 싱속이 가능하고,
// implements를 통해 클래스에게 형태 정보를 줄 수 있다


// Function

// Type Alias
type TEat = (food: string)=> void

// Interface
interface IEat{
    (food: string):void
}



// Array

// Type Alias
type Aarr = string[]

// Interface
interface Iarr{
    [index: number]: string
}



// InterSection
interface ErrorHanding {
    success: boolean,
    error?: {message: string}
}
interface ArtistsData {
    atrtists: {name: string}
}

// Type Alias
type AArtistResType = ArtistsData & ErrorHanding

// Interface
interface IArtistResType extends ArtistsData, ErrorHanding {}



// Union
interface Bird{
    fly(): void
    layEggs(): void
}
interface Fish{
    swim(): void
    layEggs(): void
}

// TypeAlias
type TPetType = Bird | Fish

// Interface : Uniom 속성의 명시가 어려움

// Additional...
// Type Alias를 통해 만든 타입은 interface에 적용X
// interface IPetType extends TPetType -> Error
// class또한 Type Alias를 통해 만든 Type정보를 활용하지 못함
// class Pet implements TPetType -> Erroe



// Declaraion Merging
// 같은 이름의 interface가 2개라면 실재 사용시 합병(Merge)된다

interface Merge{    // "name" Property만 선언한 interface "Merge"
    name: string
}
interface Merge{    // "age" Property만 선언한 interface "Merge"
    age:string
}

// Declaraion Merging으로 인해 "Merge" type은 name과 age속성 모두 가져야 함
const P:Merge = {
    name: "Ches",
    age: "24"
}



