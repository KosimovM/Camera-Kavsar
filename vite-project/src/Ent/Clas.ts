export interface Class {
  id: string
  fullName: string
  childName: string
  phoneNumber: string
  startTime: string
  endTime: string
  centerId: number
  classRoomId: number
}

export interface IClassState {
  data: Class[]
}

export interface Create {
  fullName: string
  childName: string
  phoneNumber: string
  startTime: string
  endTime: string
  centerId: number
  classRoomId: number
}

export interface Update {
  id : string
 fullName: string
  childName: string
  phoneNumber: string
  startTime: string
  endTime: string
  centerId: number
  classRoomId: number
}
