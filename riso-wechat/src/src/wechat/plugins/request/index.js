/**
 * 请求
 */
import axios from "axios";
import { Toast } from 'mint-ui';

export default {
    install: function (Vue, options) {
        if (this.installed)
            return;

        this.request = axios.create(options);
        this._init();

        Vue.prototype.$request = this;
    },
    _init: function () {
        this.request.interceptors.response.use(
            response => {
                console.log(response)
                // 判断
            },
            error=> {
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
        return this.request.get(url, data)
    }
}
