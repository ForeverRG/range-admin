export interface IResponseDataType<T = any> {
  code: number
  data: T
}

export interface IResponseLoginDataType {
  id: number
  name: string
  token: string
}

export interface IAccount {
  name: string
  password: string
}
