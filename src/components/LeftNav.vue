<template>
  <el-menu router :default-active="$route.path " class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
           background-color="#334157" text-color="#fff" active-text-color="#ffd04b" :collapse="collapsed"
           :collapse-transition="bb">
    <div class="logobox">
      <h3>P2P网贷系统</h3>
    </div>
    <el-submenu v-for="n1 in treeNodeList" :key="'key-'+n1.treeNodeId" :index="'index-'+n1.treeNodeId">
      <template slot="title">
        <i :class="n1.icon"></i>
        <span>{{n1.treeNodeName}}</span>
      </template>
      <el-menu-item v-for="n2 in n1.children" :key="'key-'+n2.treeNodeId" :index="n2.url">
        <i :class="n2.icon"></i>
        <span>{{n2.treeNodeName}}</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
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
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    border: none;
    text-align: left;
  }

  .el-menu-item-group__title {
    padding: 0px;
  }

  .el-menu-bg {
    background-color: #367FA9 !important;
  }

  .el-menu {
    border: none;
  }

  .logobox {
    height: 50px;
    line-height: 40px;
    color: #367FA9;
    font-size: 20px;
    text-align: center;
    padding: 20px 0px;
  }

  .logoimg {
    height: 40px;
  }
</style>
