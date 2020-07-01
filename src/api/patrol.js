import { http, base, getUrl } from './http'

/**s
 * 巡检API
 * **/
export function patrol(param) {
  let url = getUrl('/record/search')
  return http.get(url,param)

}
