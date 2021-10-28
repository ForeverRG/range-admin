export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

export interface IUserMenu {
  children?: IUserMenu[]
  id: number
  name: string
  parentId: number
  sort: number
  type: number
  url: string
}
