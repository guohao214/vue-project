<template>
    <div class="header">
        <div class="logo"><img src="static/img/logo.png" alt=""></div>
        <div class="menu">
            <el-menu theme="dark" :default-active="activeIndex" class="el-menu-header" mode="horizontal"
                     router>
                <el-menu-item index="index" class="el-icon-menu icon-home"></el-menu-item>

                <template v-for="menu in headerMenus">
                    <el-menu-item :index="menu.index" @click="handleSelect(menu.type)">{{ menu.name }}</el-menu-item>
                </template>
            </el-menu>
        </div>
        <div class="user-info">
            <el-dropdown trigger="hover" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../static/img/img.jpg">
                    {{username}}<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<style scoped>
    .icon-home:before {
        content: url('../../../static/img/home.png');
        top: 3px;
        display: inline-block;
        margin-top: 3px;
    }
</style>

<script>
    import {mapGetters} from 'Vuex'
    export default {
        data() {
            return {
                name: '销售主管'
            }
        },
        computed: {
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            },
            ...mapGetters([
                'headerMenus'
            ])
        },
        methods: {
            handleCommand(command) {
                if (command == 'loginout') {
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            },
            handleSelect(index) {
//                this.$request.get('xx').then(function(data){}).catch(function (err) {
//                    console.log(err)
//                })

                this.$store.commit('getSlideMenus', index)
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        font-size: 22px;
        line-height: 60px;
        color: #fff;
        display: flex;
        justify-content: space-between;
    }

    .header .logo {
        float: left;
        width: 250px;
        text-align: center;
    }

    .header .logo img {
        vertical-align: middle;
    }

    .header .el-menu-header {
        background-color: transparent;
    }

    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }

    .user-info .el-dropdown-link {
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }

    .user-info .user-logo {
        position: absolute;
        left: 0;
        top: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .el-dropdown-menu__item {
        text-align: center;
    }

    .el-menu-item.is-active {
        border-bottom:5px solid #20a0ff
    }

    .menu {
        flex: 3;
    }
</style>
