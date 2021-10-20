import { ILoginState } from './login/type'

// 根state
export interface IRootState {
  name: string
  age: number
}

// 模块store
export interface IRootWithModuleState {
  loginModule: ILoginState
}

export type IStoreType = IRootState & IRootWithModuleState
