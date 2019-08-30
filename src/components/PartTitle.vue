<template>
    <!--小标题-->
    <div class="part-title">
        <div class="part-title-inner">
            <div class="part-title-name">{{theName}}</div>
            <div class="part-title-line"></div>
            <div class="part-title-name-ch">{{nameCh}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',

    mixins: [],

    components: {},

    props: {
        nameEg: '',
        nameCh: ''
    },

    data () {
        return {
            theName: ''
        }
    },

    computed: {},

    watch: {},

    created () {},

    mounted () {
        this.theName = this.nameEg.toUpperCase()
    },

    destroyed () {},

    methods: {}
}
</script>

<style lang='scss' scoped>
    .part-title {
        width: 100%;
        @include defaultFlex;
        padding: 40px 0 35px;
    }
    .part-title-name {
        font-size:30px;
        font-weight:bold;
        color:rgba(181,181,181,1);
        line-height:25px;
        text-align: center;
    }
    .part-title-name-ch {
        font-size:20px;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:25px;
        text-align: center;
        margin-top: 9px;

    }
    .part-title-line {

        margin-top: 5px;
        position: relative;
        @include defaultFlex;
    }
    .part-title-line::after {
        content: '';

        width:164px;
        height:2px;
        background:rgba(218,231,240,1);
    }

    .part-title-inner {
        position: relative;
    }

</style>
