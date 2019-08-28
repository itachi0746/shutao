<template>
    <div class="app" id="L1">
        <Header :activeItem.sync="activeItem"/>
        <div class="headerfillter"></div>

        <div class="about">
            <div class="form">
                <div class="f-title">
                    联系我们
                </div>
                <div class="f-content">
                    <Form :model="ruleForm" ref="ruleForm" label-width="56px" class="demo-ruleForm">
                        <FormItem label="名字" prop="Name">
                            <Input placeholder="请输入名字" type="text" v-model="ruleForm.Name"></Input>
                        </FormItem>
                        <FormItem label="电话" prop="Mobile">
                            <Input placeholder="请输入电话" type="number" v-model="ruleForm.Mobile"></Input>
                        </FormItem>
                        <div class="ver-box">
                            <div class="ft-box">
                                <FormItem label="验证码" prop="code">
                                    <Input placeholder="请输入验证码" type="number" v-model="ruleForm.code"></Input>
                                </FormItem>
                            </div>
                            <div class="el-img-box">
                                <img ref="theImage" src="/Home/VerifyImg" @click="LoadCheckCode" alt="">
                            </div>
                        </div>

                        <FormItem label="邮箱" prop="Email">
                            <Input placeholder="请输入邮箱" v-model="ruleForm.Email"></Input>
                        </FormItem>
                        <FormItem label="留言" prop="Content">
                            <Input :resize="'none'" placeholder="请输入留言" :rows="4" type="textarea" v-model="ruleForm.Content"></Input>
                        </FormItem>

                        <div class="btm-box">
                            <Button type="primary" @click="submitForm('ruleForm')">提交</Button>
                        </div>
                    </Form>
                </div>
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
import {Form, FormItem, Input, Button} from 'element-ui'
import * as http from '../../utils/core/http'

export default {
    name: '',

    mixins: [indexData],

    components: {
        Header, Footer, Lunbo, PartTitle, Form, FormItem, Input, Button
    },

    props: {},

    data () {
        return {
            activeItem: 'L7',
            ruleForm: {
                Name: '',
                Mobile: '',
                code: '',
                Email: '',
                Content: ''
            },
            rules: {
                name: [
//                    { message: '请输入活动名称', trigger: 'blur' },
                ],
                Mobile: [
//                    { message: '请输入手机号码', trigger: 'change' },
                    { min: 11, max: 11, message: '长度为 11 个字符', trigger: 'blur' }

                ],
                verify: [
//                    { type: 'number', message: '验证码', trigger: 'change' },
//                    { min: 4, max: 4, message: '长度为 4 个字符', trigger: 'blur' }
                ],
                email: [
//                    { type: 'email', message: '请输入邮箱地址', trigger: 'change' }
                ],
                msg: [
//                    { type: 'array', message: '', trigger: 'change' }
                ]
            }
        }
    },

    computed: {},

    watch: {},

    created () {
    },

    mounted () {
//        this.getCode()
    },

    destroyed () {
    },

    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
//                debugger
                if (valid) {
                    const theData = this.ruleForm
                    http.postData('/Submit', theData).then((res) => {
                        console.log(res)
                        if (res.success) {
                            alert('谢谢！我们会尽快与您联系')
                            this.resetForm(formName)
                        } else {
                            alert(res.msg)
                        }
                    })
//                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });

        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        LoadCheckCode () {
            this.$refs['theImage'].src = "/Home/VerifyImg?t=" + new Date().getTime()
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
    .headerfillter {
        height: 60px;
        width: 100%;
    }
    .about {
        width: 100%;
        background-color: #EEEEEE;
        padding: 80px 0 184px 0;
    }
    .form {
        width: 574px;
        /*height: 580px;*/
        background-color: #fff;
        margin: 0 auto;
        padding-top: 40px;
        padding-bottom: 30px;
        /*margin: 80px auto 184px;*/
    }
    .f-title {
        font-size:20px;
        font-weight:bold;
        color:rgba(54,115,172,1);
        line-height:25px;
        text-align: center;
        margin-bottom: 30px;
    }
    .f-content {
        padding: 0 64px;
        width: 100%;
        @include borderBox()
    }
    .el-form-item {
        margin-bottom: 14px;
    }
    .btm-box {
        text-align: center;
    }
    .el-button {
        padding: 11px 50px;
        border-radius: 0;
    }
    .el-button--primary {
        background-color: #3B6FB7;
        border-color: #3B6FB7;
    }
    .ft-box {
        width: 326px;

    }
    .el-img-box {
        /*width: 116px;*/
        width: 2.9rem;
        height: 40px;
        margin-left: 4px;
        /*background-color: #000;*/
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .ver-box {
        display: flex;
        align-items: center;
        position: relative;
    }

</style>
