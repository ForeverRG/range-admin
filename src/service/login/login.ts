import { rangeRequest } from '..'
import { LoginApi } from './enum'
import { IAccount, IResponseDataType, IResponseLoginDataType } from './type'

// 登录请求
export function accountLoginRequest(
  account: IAccount
): Promise<IResponseDataType<IResponseLoginDataType>> {
  return rangeRequest.post<IResponseDataType<IResponseLoginDataType>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

// 根据用户id获取用户信息请求
export function getUserInfoByIdRequest(userId: number): Promise<IResponseDataType> {
  return rangeRequest.get<IResponseDataType>({
    url: LoginApi.LoginUserInfo + userId
  })
}

// 根据角色id获取用户菜单
export function getUserMenusByRoleIdRequest(roleId: number): Promise<IResponseDataType> {
  return rangeRequest.get<IResponseDataType>({
    url: LoginApi.UserMenus + roleId + '/menu'
  })
}
