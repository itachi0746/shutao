<template>
    <div class="app" id="L1">
        <Header :activeItem.sync="activeItem"/>
        <div class="headerfillter" ref="header"></div>

        <Lunbo ref="lunbo"/>
        <!--<PartTitle id="L2" :nameEg="'About us'" :nameCh="'关于我们'"></PartTitle>-->
        <!--<div class="w1200">-->
            <!--<div class="part part1">-->
                <!--<div class="part1-l">-->
                    <!--<div class="part1-img"></div>-->
                <!--</div>-->
                <!--<div class="part1-r">-->
                    <!--<div>-->
                        <!--广州数淘网络信息有限公司成立于2019年1月，公司主要以云计算和大数据为主要基础，为广大中小微型企业提供云计算框架和数据分析及可视化展示服务。公司的主要产品包括Party互动大屏互动系统，PaaS平台开发框架和工业级爬虫应用框架等。-->
                    <!--</div>-->
                    <!--<div class="mt26 fwb">-->
                        <!--主要产品：PaaS开发框架、爬虫开发框架、Party互动等。-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->

        <div class="part part1" ref="part1">
            <PartTitle id="L2" :nameEg="'About us'" :nameCh="'关于我们'"></PartTitle>
            <div class="w1200">
                <div class="part1-inner">
                <div class="part1-l">
                    <div class="part1-img"></div>
                </div>
                <div class="part1-r">
                    <div>
                        广州数淘网络信息有限公司成立于2019年1月，公司主要以云计算和大数据为主要基础，为广大中小微型企业提供云计算框架和数据分析及可视化展示服务。公司的主要产品包括Party互动大屏互动系统，PaaS平台开发框架和工业级爬虫应用框架等。
                    </div>
                    <div class="mt26 fwb">
                        主要产品：PaaS开发框架、爬虫开发框架、Party互动等。
                    </div>
                </div>
                </div>
            </div>
        </div>


        <div class="part part2" ref="part2">
            <PartTitle id="L3" :nameEg="'Service scope'" :nameCh="'服务范围'"></PartTitle>
            <div class="w1200">
                <el-row>
                    <el-col :span="6" v-for="(item,index) in part2Data">
                        <div class="part2-item">
                            <div class="part2-item-img-box">
                                <div class="part2-item-img brbs" :style="{'backgroundImage': `url(${item.img})`}"></div>
                            </div>
                            <div class="part2-item-title fwb">{{item.name}}</div>
                            <div class="part2-item-font">{{item.font}}</div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="part part3" ref="part3">
            <PartTitle id="L4" :nameEg="'Our products'" :nameCh="'我们的产品'"></PartTitle>
            <div class="w1200">
                <el-row :gutter="10">
                    <el-col :span="6" v-for="(item,index) in part3Data">
                        <div class="part3-item">
                            <div class="part2-item-img-box">
                                <div class="part3-item-img brbs" :style="{'backgroundImage': `url(${item.img})`}"></div>
                            </div>
                            <div class="part2-item-title fwb">{{item.name}}</div>
                            <div class="part3-item-font" v-if="item.name!=='PaaS开发框架'">{{item.font}}</div>
                            <div v-else>
                                <ul class="pass-ul">
                                    <li>
                                        <div class="pass-div">分布式计算基础模型</div>
                                    </li>
                                    <li>
                                        <div class="pass-div">分布式数据访问及存储模型</div>
                                    </li>
                                    <li>
                                        <div class="pass-div">分布式部署及管理模型</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="part part4" ref="part4">
            <PartTitle id="L5" :nameEg="'PARTNERS'" :nameCh="'合作伙伴'"></PartTitle>
            <div class="w1200">
                <el-row :gutter="10">
                    <el-col :span="6" :offset="index===0?9:0" v-for="(item,index) in part4Data">
                        <div class="part4-item">
                            <!--<div class="part4-item-img" :style="{'backgroundImage': `url(${item.img})`}">-->
                            <div class="part4-item-img">
                                <img :class="item.cls" :src="item.img" alt="">
                            </div>
                            <div class="part4-item-name">{{item.name}}</div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="part part5" ref="part5">
            <PartTitle id="L6" :nameEg="'CLIENT LIST'" :nameCh="'客户列表'"></PartTitle>
            <div class="w954">
                <el-row :gutter="10">
                    <el-col :span="6" v-for="(item,index) in part5Data">
                        <div class="part5-item">
                            <!--<div class="part5-item-img" :style="{'backgroundImage': `url(${item.img})`}">-->
                            <div class="part5-item-img">
                                <img :class="item.cls" :src="item.img" alt="">
                            </div>
                            <div class="part5-item-name">{{item.name}}</div>
                            <div class="part5-item-add">{{item.address}}</div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import Lunbo from '../../components/Lunbo.vue'
import PartTitle from '../../components/PartTitle.vue'
import indexData from '../../utils/indexData'
import utils from '../../utils/utils'

export default {
    name: '',

    mixins: [indexData],

    components: {
        Header, Footer, Lunbo, PartTitle
    },

    props: {},

    data () {
        return {
            activeItem: 'L1',
            activeItemArr: ['L1','L2','L3','L4','L5','L6'],
            heightArr: []
        }
    },

    computed: {},

    watch: {},

    created () {
    },

    mounted () {
//        window.addEventListener('scroll',this.winScroll);
    },

    destroyed () {
    },

    methods: {
        winScroll (e) {
//            console.log(e)
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; // 滚动高度
            console.log(scrollTop)

            utils.hasSetRem(this.getHeight)
            debugger
            if (scrollTop >= this.heightArr[0] + this.heightArr[1]) {
                this.activeItem = this.activeItemArr[1]
            }
            else if (scrollTop >= this.heightArr[0] + this.heightArr[1] + this.heightArr[2]) {
                this.activeItem = this.activeItemArr[2]
            }
            else if (scrollTop >= this.heightArr[0] + this.heightArr[1] + this.heightArr[2] + this.heightArr[3]) {
                this.activeItem = this.activeItemArr[3]
            }
            else if (scrollTop >= this.heightArr[0] + this.heightArr[1] + this.heightArr[2] + this.heightArr[3]  + this.heightArr[4]) {
                this.activeItem = this.activeItemArr[4]
            }
        },
        getHeight () {
            this.heightArr = []
            const headH = this.$refs.header.offsetHeight
            const lunboH = this.$refs.lunbo.elHeight

            const p1 = utils.getStyle(this.$refs.part1)
            const p2 = utils.getStyle(this.$refs.part2)
            const p3 = utils.getStyle(this.$refs.part3)
            const p4 = utils.getStyle(this.$refs.part4)
            const p1H = utils.delPx(p1.height) + utils.delPx(p1.marginBottom)
            const p2H = utils.delPx(p2.height) + utils.delPx(p2.marginBottom)
            const p3H = utils.delPx(p3.height) + utils.delPx(p3.marginBottom)
//            const p4H = utils.delPx(p4.height) + utils.delPx(p4.marginBottom)

            this.heightArr = [headH, lunboH, p1H, p2H, p3H]

        }
    }
}
</script>

<style lang='scss' scoped>
    .app {
        width: 100%;
        font-size: 16px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
    }
    .part {
        margin-bottom: 60px;
    }
    .part1 {
        /*display: flex;*/
    }

    .part1-img {
        width: 485px;
        height: 312px;
        background-image: url('../../assets/guanyuwomen.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .part1-r {
        flex: 1;
        padding-top: 78px;
        padding-left: 20px;
        line-height: 32px;
    }

    .mt26 {
        margin-top: 26px;
    }
    .part2 {
        height:450px;
        background:rgba(242,244,245,1);
    }
    .part2-box {
        display: flex;
    }
    .part2-item {
        width: 100%;
        padding: 0 28px;
        line-height:24px;
    }
    .part2-item-img {
        width: 109px;
        height: 109px;
    }
    .part3-item-img {
        width: 70px;
        height: 70px;
    }
    .part2-item-title {
        margin-bottom: 20px;
        text-align: center;
    }
    .part2-item-font {
        text-align: center;
        font-size: 14px;
        line-height:24px;
        width: 220px;
        margin: 0 auto;
    }
    .part3-item-font {
        text-align: center;
        font-size: 14px;
        line-height:28px;
    }
    .part2-item-img-box {
        display: flex;
        justify-content: center;
    }
    .part3-item {
        height: 370px;
        background:rgba(226,237,245,1);
        padding: 36px 28px;
        line-height:28px;
    }
    .part4-item {
        /*width: 262px;*/
        /*height: 165px;*/
    }
    .part4-item-img {
        width: 262px;
        height: 134px;
        @include defaultFlex;
        margin: 0 auto;
        border:1px solid rgba(204,204,204,1);
        border-radius:8px;
        /*background-size: contain;*/
        /*background-repeat: no-repeat;*/
        /*background-position: center;*/
        .img1 {
            width: 172px;
            height: 59px;
        }
        .img2 {
            width: 260px;
            height: 45px;
        }
    }
    .part4-item-name {
        font-size:16px;
        font-weight:400;
        color:rgba(51,51,51,1);
        text-align: center;
        margin: 16px auto 0;
    }
    .part5-item-img {
        width: 216px;
        /*width: 100%;*/
        height: 116px;
        margin: 0 auto;
        @include defaultFlex;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border:1px solid rgba(204,204,204,1);
        border-radius:8px;
        img {
            width: 100%;
            height: 100%;
        }
        .img1 {
            width: 101px;
            height: 101px;
        }
        .img2 {
            width: 172px;
            height: 59px;
        }
        .img3 {
            width: 106px;
            height: 106px;
        }
        .img4 {
            width: 101px;
            height: 101px;
        }
    }
    .part5-item-name {
        font-size:14px;
        font-weight:bold;
        color:rgba(27,27,27,1);
        margin-top: 19px;
        text-align: center;

    }
    .part5-item-add {
        font-size:14px;
        font-weight:400;
        color:rgba(27,27,27,1);
        text-align: center;
        margin-top: 10px;
    }
    .headerfillter {
        height: 60px;
        width: 100%;
    }
    .part1-inner {
        display: flex;
    }
    .pass-ul {
        font-size: 14px;

        .pass-div {
            line-height: 39px;
        }
        .pass-div::before {
            content: '';
            width:8px;
            height:8px;
            background:rgba(110,110,110,1);
            border-radius:50%;
            display: inline-block;
            margin-right: 7px;
            /*margin-bottom: 2px;*/
        }
    }


</style>
