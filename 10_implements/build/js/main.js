"use strict";
class Car {
    constructor() {
        this.price = 100;
        this.color = "white";
    }
    drive() {
        return "drive";
    }
}
// Car의 모든 속성에 대해 구현을 해 주어야 함
class Ford {
    constructor() {
        this.price = 200;
        this.color = "black";
    }
    drive() {
        return "drive";
    }
}
// interface에 대해서도 적용가능
class FordWithPart extends Ford {
    constructor() {
        super(...arguments);
        this.seats = 4;
        this.tire = 4;
    }
}
