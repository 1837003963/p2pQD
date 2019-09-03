<template>
  <div class="login-wrap">
    <el-form :data="addFrom" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title">用户登录</h3>
      <el-form-item>
        <el-input v-model="addFrom.yoName" placeholder="账号" autocomplete="off"></el-input>
      </el-form-item>
      <el-input type="password" show-password v-model="addFrom.yoPasswed" placeholder="密码" autocomplete="off"></el-input>
      </el-form-item>
      </el-form-item>
      <p></p>
      <el-button type="primary" style="width:100%;" @click="doSubmit">登陆</el-button>
      </el-form-item>
      <el-form-item style="text-align: left;">
        <el-link type="primary" :underline="false" @click="wjmm">忘记密码</el-link>
        <el-link type="primary" :underline="false" @click="add">快速注册</el-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'

  export default {
    name: 'login',
    data: function() {
      return {
        msg: new Date().getTime(),
        addFrom:{
          yoName: null,
          yoPasswed: null,
        }
      }

    },
    result:[],
    methods: {
      doSubmit: function() {
        console.log('doSubmit');
        var form = {
          yoName: this.addFrom.yoName,
          yoPasswed: this.addFrom.yoPasswed
        }
        console.log(form);
        let url = this.axios.urls.Yonhu_Login;
        this.axios.post(url, this.addFrom).then((resp) => {
          if (0 == resp.data.code) {
            this.$message({
              message: resp.data.message,
              type: 'success'
            });

            this.$store.commit('setYoName', {
              yoName: this.addFrom.yoName
            });

            this.$store.commit('setYoId', {
              yoId: this.yoId
            });

            this.$router.push({
              path: '/AppMain'
            });

          } else {
            this.$message.error(resp.data.message);
          }
        }).catch((error) => {});
      },
      add:function() {
        this.$router.push({
          path: '/add'
        })
      },
      wjmm:function(){
        this.$router.push({
          path: '/UpdataPwd'
        })
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
    /*margin-top:100px*/
  }

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
