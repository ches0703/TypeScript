"use strict";
// "name" | "age" | "address"
const user = {
    name: "hello",
    age: 20,
    address: "korea"
};
// "name" | "age" | "address"
var UserRole;
(function (UserRole) {
    UserRole[UserRole["admin"] = 0] = "admin";
    UserRole[UserRole["manager"] = 1] = "manager";
})(UserRole || (UserRole = {}));
// "admin" | "manager"
