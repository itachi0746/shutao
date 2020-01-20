<template>
    <div class="footer">
        <div class="footer-inner">
            <div class="footer-img-box">
                <div class="the-code"></div>
                <div class="code-name">公众号</div>
            </div>
            <div class="footer-mid">
                <div class="footer-mid-line1">
                    <a href="http://www.beian.miit.gov.cn/">
                        备案: 粤ICP备19081095号
                    </a>
                </div>
                <div>
                    © 2019 广州数淘网络信息有限公司 .
                </div>
                <div>
                    All Rights Reserved.
                </div>
            </div>
            <div class="footer-r">
                <div>
                    广州市天河区建中路14、16号四层自编415室
                </div>
                <div>
                    手机 : +86-13928914698
                </div>
                <div>
                    邮件 : service@jierutek.com
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },

    components: {},

    computed: {},

    methods: {},

    created () {
    },

    mounted () {
    },

    beforeDestroy () {
    }
}
</script>

<style lang='scss' scoped>
    .footer {
        /*height: 280px;*/
        width: 100%;
        background-color: #081B28;
        padding: 60px 0;
        color: #FFFFFF;
        font-size: 14px;
        display: flex;
        justify-content: center;
    }
    .footer-inner {
        display: flex;
        align-items: center;
    }
    .footer-img-box {
        height: 160px;
        width: 190px;
        padding-right: 50px;

    }
    .the-code {
        width: 133px;
        height: 132px;
        background: url("../assets/1565950198.png") no-repeat;
        background-size: 100% 100%;
    }
    .code-name {
        margin-top: 8px;
        text-align: center;
    }
    .footer-mid {
        padding: 44px 45px 42px 25px;
        border-right: 1px solid #113045;
        border-left: 1px solid #113045;
        height: 157px;

    }
    .footer-mid-line1 {
        margin-bottom: 10px;
        a {
            color: #fff;
        }
    }
    .footer-r {
        padding: 44px 45px 42px 25px;
        padding-left: 47px;
        line-height:25px;
    }
</style>
