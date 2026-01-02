export interface User {
  id: number
  name: string
  centerId: number
  cameraUrl: string
}

export interface IUserState {
  data: User[]
  usersById: User
}

export interface IUpdateUser {
  name: string
  centerId: number
  cameraUrl: string
}

export interface ICreateUser {
  id: number
  name: string
  centerId: number
  cameraUrl: string
}
