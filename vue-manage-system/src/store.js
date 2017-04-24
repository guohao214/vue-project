import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default  new Vuex.Store({
    state: {
        menus: {
            'index': [{
                'index': 'index',
                'name': '首页'
            }, {
                'index': 'follow',
                'name': '跟随'
            }],
            'setting': [{
                'index': 'VueTable',
                'name': '登录'
            }, {
                'index': 'BaseForm',
                'name': '表单'
            }]
        },
        slideMenus: [{
            'index': 'upload',
            'name': '分配销售线索'
        }, {
            'index': 'readme',
            'name': '销售线索跟进'
        }],
        headerMenus: [{
            'index': 'BaseCharts',
            'type': 'index',
            'name': '市场运营'
        },{
            'index': 'Markdown',
            'type': 'index',
            'name': '销售管理'
        },
            {
            'index': 'BaseTable',
            'type': 'index',
            'name': '运维管理'
        }, {
            'index': 'VueTable',
            'type': 'setting',
            'name': '系统设置'
        }]
    },
    getters: {
        headerMenus: function (state) {
            return state.headerMenus
        },
        onRoutes: function (state) {
            return state.slideMenus[0].index
        }
    },
    mutations: {
        getSlideMenus: (state, index) => {
            state.slideMenus = state.menus[index];
        }
    }
})
