
// 현재 사용자의 구성 값
type AppConfig = {
  userName: string
  email: string
}

// // 사용자에게 구성 값을 변경할 수 있는지에 대한 권한 여부
// type AppPermissions = {
//   // AppPermissions의 userName이 true인 경우 userName 수정 가능
//   userName: boolean
//   emmail: boolean
// }

type AppPermissions = { [K in keyof AppConfig]:boolean}
// type AppPermissions = {
//   userName: boolean;
//   email: boolean;
// }



type DeviceFormatter<T> = {
  // "?"를 통해 Optinal Property 사용
  [K in keyof T]? : T[K]
}

type Device = {
  manufacturer: string
  price: number
}

const iPhone:DeviceFormatter<Device> = {
  manufacturer: "apple",
  price: 100
}