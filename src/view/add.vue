<template>
  <div class="login-wrap">
    <el-form :data="addFrom" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title">用户注册</h3>
      <el-form-item>
        <el-input v-model="addFrom.yoTe" placeholder="手机号码" autocomplete="off" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-input style="width:55%" v-model="addFrom.yoYan" placeholder="验证码" autocomplete="off" clearable></el-input>
        &nbsp;&nbsp;
        <el-button @click="Yan" v-show="sendAuthCode" class="auth_text auth_text_blue" style="width:40%">获取验证码</el-button>
        <el-button v-show="!sendAuthCode" class="auth_text" disabled> <span class="auth_text_blue">{{auth_time}} </span> 秒可重发</el-button>
      </el-form-item>

      <el-form-item>
        <el-input v-model="addFrom.yoName" placeholder="用户名" autocomplete="off" clearable></el-input>
      </el-form-item>
      <el-input type="yoPasswd" show-password v-model="addFrom.yoPasswed" placeholder="请输入密码" autocomplete="off" clearable></el-input>

      <el-form-item>
        <p></p>
        <el-button type="primary" style="width:100%;" @click="doSubmit">注册</el-button>
      </el-form-item>
      <el-form-item  style="text-align: left;">
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'

  export default {
    name: 'add',
    data: function() {
      return {
        msg: new Date().getTime(),
        sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
        auth_time: 0, /*倒计时 计数器*/
        addFrom:{
          yoName: null,
          yoPasswed: null,
          yoTe: null,
          yoYan: null,
        }
      }

    },
    result:[],
    methods: {
      Yan:function(){
        this.sendAuthCode = false;
        this.auth_time = 60;
        var auth_timetimer =  setInterval(()=>{
          this.auth_time--;
          if(this.auth_time<=0){
            this.sendAuthCode = true;
            clearInterval(auth_timetimer);
          }
        }, 1000);

        var form={
          yoTe:this.addFrom.yoTe
        }
        console.log(form);

        let url = this.axios.urls.Yonhu_Yan;
        this.axios.post(url, form).then((resp) => {
          this.$message({
            message: '验证码发送成功！',
            type: 'success'
          });
        }).catch((error) => {});

      },
      doSubmit: function() {
        console.log('doSubmit');
        var form = {
          yoName: this.yoName,
          yoPasswed: this.yoPasswed,
          yoTe:this.yoTe,
          yoYan:this.yoYan
        }
        console.log(form);

        let url = this.axios.urls.Yonhu_Add;
        this.axios.post(url, this.addFrom).then((resp) => {
          this.$message({
            message: resp.data.message,
            type: 'success'
          });

          this.$router.push({
            path: '/login'
          });

        }).catch((error) => {});
      }
    }
  }
</script>


<style scoped>
  .login-wrap {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-top: 10%;
    background-repeat: no-repeat;
    background-position: center right;
    background-size: 100%;
  }

  .login-container {
    border-radius: 10px;
    margin: 0px auto;
    width: 350px;
    padding: 30px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    text-align: left;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  }

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
