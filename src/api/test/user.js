import { http, base, getUrl } from '../http'

/**
 * 登陆校验
 * **/
export function getUserPage(param) {
  let url = getUrl('/user/search')
  return http.get(url,param)
}
