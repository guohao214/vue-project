<template>
    <div class="wrapper">
        <v-head></v-head>
        <div class="content">
            <transition name="move" mode="out-in">
                <el-card class="box-card" v-loading.body="loading">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">业务代办</span>
                        <i class="el-icon-loading loading" @click="loadMessage"></i>
                    </div>
                    <div v-for="o in 4" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </transition>
        </div>
    </div>
</template>

<style scoped>
    .content {
        left: 0;
        width: 100%;
    }

    .loading {
        float:right;
        animation:inherit;
        line-height: 36px;
        cursor: pointer;
    }
    .loading:before {
        content: url('../../../../static/img/refresh.png');
    }
</style>

<script>
    import vHead from '../../common/Header.vue';
    export default {
        data: function () {
            return {
                loading: false
            }
        },
        components:{
            vHead
        },
        methods: {
            loadMessage: function () {
                this.loading=!this.loading;

                // 加载信息
            }
        },
        mounted: function () {
            // 加载数据
            //this.$nextTick(()=>this.loadMessage())
        }
    }
</script>
