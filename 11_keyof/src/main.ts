interface IUser {
  name: string
  age: number
  address: string
}

type UserKeys1 = keyof IUser
// "name" | "age" | "address"

const user = {
  name: "hello",
  age: 20,
  address: "korea"
}

type UserKeys2 = keyof typeof user
// "name" | "age" | "address"


enum UserRole {
  admin,
  manager
}

type UserRoleKeys = keyof typeof UserRole
// "admin" | "manager"
