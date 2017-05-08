/**
 * 请求
 */
import axios from "axios";
import Qs from 'qs'
import {Toast} from 'mint-ui';

export default {
  install: function (Vue, options) {
    if (this.installed)
      return;

    if (!options)
      options = {};

    // 数据
    options.transformRequest = [function (data) {
      data = Qs.stringify(data);
      return data;
    }],

    this.request = axios.create(options);
    this._init();

    Vue.prototype.$request = this;
  },
  _init: function () {
    this.request.interceptors.response.use(
      response => {
        return response
        // 判断
      },
      error => {
        console.log(error.response)
        Toast({
          message: '请求失败',
          position: 'bottom',
          duration: 5000
        });

        return Promise.reject(error.response.data)
      }
    );
  },
  get: function (url, data) {
    return this.request.get(url, data)
  },
  post: function (url, data) {
    return this.request.post(url, data)
  }
}
