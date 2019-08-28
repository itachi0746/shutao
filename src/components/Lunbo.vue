<template>
    <div class="lunbo" ref="lunbo">
        <Carousel :height="elHeight">
            <CarouselItem v-for="(item,index) in lunboArr" :key="index">
                <img class="el-img" :src="item.img" alt="">
            </CarouselItem>
        </Carousel>
    </div>
</template>

<script>
import utils from '../utils/utils'
import {Carousel, CarouselItem} from 'element-ui'
export default {
    data () {
        return {
            lunboArr: [
                {img: require('../assets/banner2.png')},
                {img: require('../assets/banner.png')},
            ],
            elHeight: '700px' // 设计图的高
        }
    },
    props: {
        imgArr: {
            type: Array,
            default: null
        }
    },

    components: {Carousel,CarouselItem},

    computed: {},

    methods: {
        /**
         * 设置banner容器高度
         */
        setBannerHeight () {
            const theH = this.$refs['lunbo'].offsetHeight
            this.elHeight = theH + 'px'
        },
        init () {
            this.handleResize()
            utils.hasSetRem(this.setBannerHeight)

        },
        // 处理窗口大小变化
        handleResize () {
            let me = this;
            let docEl = document.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = () => {
                    const theH = me.$refs['lunbo'].offsetHeight
                    me.elHeight = theH + 'px'
                }
            window.addEventListener(resizeEvt, recalc, false)
        }
    },

    created () {
    },

    mounted () {
        this.init()
//        this.lunboArr = this.imgArr
    },

    beforeDestroy () {
    }
}
</script>

<style lang='scss' scoped>
    .lunbo {
        width: 100%;
        height: 700px;
    }

    .el-img {
        width: 100%;
        height: 100%;
    }
</style>
