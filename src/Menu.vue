<template>
  <div class="view">
    <div class="menu">
      <el-menu index="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item index="0"><i class="el-icon-message"></i>
          <router-link v-bind:style="alink" to="/">报销单管理</router-link>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i>统计报表</template>
          <el-menu-item index="0">
            <router-link v-bind:style="alink" to="/costpay">费用支出统计</router-link>
          </el-menu-item>
          <el-menu-item index="1">
            <router-link v-bind:style="alink" to="/costform">费用构成分析</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link v-bind:style="alink" to="/progress">报销进度分析</router-link>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="2"><i class="el-icon-setting"></i>
          <router-link v-bind:style="alink" to="/define">自定义费用类型</router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <keep-alive>
       <router-view  class="content"></router-view>
    </keep-alive>
  </div>
</template>

<script>


  export default {
    data: function () {
      return {
        alink: {
          "color": "inherit",
          "text-decoration": "none"
        }
      }
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

<style lang="less" scoped>

  .view {
    display: flex;

    .menu {
      width: 180px;
      height: 1000px;
      display: inline-block;
    }

    .content {
      flex: 1;
    }

  }


</style>
