import { http, base, getUrl } from '../http'

/**
 * 登陆校验
 * **/
export function login(param) {
  let url = getUrl('/user/login')
  return http.post(url,param)
}
