export interface Center {
  id: number
  name: string
  address: string
}

export interface ICenterState {
  data: Center[]
}

export interface IUpdateCenter {
  name: string
  address: string
  id: number
}

export interface ICreateCenter {
  name: string
  address: string
}
