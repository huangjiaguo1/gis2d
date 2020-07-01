/**
 * Created by hjp on 2020/06/18
 */
import Vue from 'vue'
import VueResource from "vue-resource";
// import {save, read, clear} from "../storage/local";
import store from "../store/index.js";
Vue.use(VueResource)

// 拦截器（增加授权token）
Vue.http.interceptors.push((request, next) => {
  const jwtToken = store.getters.getToken;
  if (jwtToken) {
    Vue.http.headers.common.Authorization = `Bearer ${jwtToken}`;
  } else {
    delete Vue.http.headers.common.Authorization;
  }
  next((response) => {
    if (response.status === 401) {
      // 当 Token 已经失效时，清空所有保存在 Storage 的数据
      this.$store.commit('setToken',null)
    }
    return response
  });
});

Vue.http.options.crossOrigin = true;
Vue.http.options.xhr = {withCredentials: true};

// export const host = 'http://192.168.0.21:9192'
export const host = 'http://192.168.1.250:9192'

export const getUrl = function (url) {
  return host + url;
}

export const http = Vue.http
