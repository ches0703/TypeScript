class Car {
  price:number = 100
  color:string = "white"

  drive():string {
    return "drive"
  }

}

// Car의 모든 속성에 대해 구현을 해 주어야 함
class Ford implements Car{
  price:number = 200
  color:string = "black"
  drive():string {
    return "drive"
  }
}

interface Part {
  seats: number,
  tire: number
}


// interface에 대해서도 적용가능
class FordWithPart extends Ford implements Part {
  seats:number = 4
  tire:number = 4
}


