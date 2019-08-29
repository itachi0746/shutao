<template>
    <div class="header" id="header">

        <div class="inner">
            <div class="logo-box">
                <div class="logo"></div>
            </div>
            <div class="header-ul-box">
                <ul class="header-ul" v-if="hData.length">
                    <li :class="{'active': item.partCode===activeItem}" v-for="(item,index) in hData" :key="index"
                        @click="clickLi(item.partCode)">
                        <a :href="item.href">
                            {{item.name}}
                        </a>
                    </li>
                </ul>
            </div>

        </div>

    </div>
</template>

<script>
import * as http from '../utils/core/http'
import * as _ from 'underscore'

export default {
    name: 'Header',
    data () {
        return {
            codeData: [ // partCode: 对照码 跟后台配置的保持一致
                { partCode: 'L1', link: 'index.html' },
                { partCode: 'L2', link: 'about.html' },
                { partCode: 'L3', link: 'falv.html' },
                { partCode: 'L4', link: 'yewu.html' },
                { partCode: 'L5', link: 'zhanlue.html' },
                { partCode: 'L6', link: 'contact.html' },
            ],
            hData: [
                {href: 'index.html', name: '首页', partCode: 'L1' },
                {href: '#L2', name: '关于我们', partCode: 'L2' },
                {href: '#L3', name: '服务范围', partCode: 'L3' },
                {href: '#L4', name: '产品', partCode: 'L4' },
                {href: '#L5', name: '合作伙伴', partCode: 'L5' },
                {href: '#L6', name: '客户列表', partCode: 'L6' },
                {href: 'about.html', name: '联系我们', partCode: 'L7' }
            ],
            resData: null
        }
    },
    props: {
        activeItem: {
            type: String,
            default: 'L1'
        }
    },
    computed: {
        isLianxi (code) {

        }
    },
    created () {
//        this.getInfo()

    },
    mounted () {
    },
    methods: {
        clickLi (partCode) {
            this.$emit('update:activeItem',partCode);
        }
    }
}
</script>
<style lang="scss">
    .header {
        /*padding: 16px 0;*/
        height: 60px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        background-color: #fff;
    }

    .inner {
        height: 100%;
        position: relative;

    }
    a {
        color: inherit;
    }
    .logo-box {
        width: 278px;
        height: 100%;
        top: 0;
        position: absolute;
        left: 355px;
        display: flex;
        align-items: center;
    }

    .logo {
        width: 278px;
        height: 50px;

        background: url("../assets/header/logo.png") no-repeat;
        background-size: 100% 100%;
    }

    .header-ul-box {
        position: absolute;
        /*top: 10px;*/
        right: 350px;
        height: 100%;
    }

    .header-ul {
        display: flex;
        align-items: center;
        color: #131313;
        font-size: 16px;
        height: 100%;

        li {
            /*float: left;*/
            /*height: 42px;*/
            height: 100%;
            /*width: 73px;*/
            min-width: 73px;
            text-align: center;
            /*line-height: 42px;*/
            line-height:25px;
            border-bottom: 2px solid transparent;
            margin-right: 15px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        li.active {
            border-bottom: 2px solid $activeColor;
            color: $activeColor;
        }
        a {
            width: 100%;
            height: 100%;
            /*text-align: center;*/
            @include defaultFlex;

            /*display: inline-block;*/
        }
    }

</style>