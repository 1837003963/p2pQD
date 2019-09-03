<template>
  <div>
    <!-- 面包屑导航 -->
    <div class="logobox">
    <h2>P2P网贷系统</h2>
      <p>用户名：{{yoName}}</p>
      <p>最后登录时间：</p>
      <p>
        <el-button class="center" type="primary">账户充值</el-button>
        <el-button type="danger">账户提现</el-button>
      </p>

    </div>
    <br>
    <p></p>
    <hr/>
    <br>
      <table>
        <tr>
          <td>账户总额：<span>18000</span>元</td>
          <td>可用金额：<span>10000</span>元</td>
          <td>冻结金额：<span>8000</span>元</td>
        </tr>
        <br>
        <tr>
          <td>待收利息：<span>1800</span>元</td>
          <td>待收本金：<span>18000</span>元</td>
          <td>待还本息：<span>9000</span>元</td>
        </tr>
      </table>
      <br>
    <hr/>
    <div>
      <table>

      </table>

    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        bb: true,
        collapsed: false,
        treeNodeList: []
      };
    },
    computed:{
      yoName:function(){
        return this.$store.getters.yoName;
      }
    },
    created: function() {
      this.$root.Bus.$on("aside-toggle", (v) => {
        this.collapsed = v;
      });

      let url = this.axios.urls.Tree_List;
      this.axios.post(url, {}).then((resp) => {
        // console.log('success');
        this.treeNodeList = resp.data.list;

      }).catch((error) => {});
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .usercheBox {
    margin-top: 20px;
  }

  .userRole {
    width: 100%;
  }

  .biankuang {
    background-color: cornflowerblue;
    font-size: 12px;
    text-align: center;
  }

  .beijing {
    background-color: cadetblue;
  }

  table {
    width: 100%;
    background: #EFEEFE;
  }

  .logobox {
    height: 170px;
    line-height: 20px;
    color: #367FA9;
    font-size: 20px;
    text-align: left;
    padding: 10px 0px;
  }
</style>
