<template>
  <div>
  <div class="menu">
    <el-menu index="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-menu-item index="0"><i class="el-icon-message"></i><router-link v-bind:style="alink" to="/">报销单管理</router-link></el-menu-item>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>统计报表</template>
        <el-menu-item index="11"><router-link  v-bind:style="alink" to="/hello">费用支出统计</router-link></el-menu-item>
        <el-menu-item index="12">费用构成分析</el-menu-item>
        <el-menu-item index="13">报销进度分析</el-menu-item>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-setting"></i><router-link v-bind:style="alink" to="/hello2">自定义费用类型</router-link></el-menu-item>
    </el-menu>
  </div>
  <router-view class="view"></router-view>
  </div>
</template>


<script>


export default {
  data:function () {
    return{
      alink:{
        "color": "inherit" ,
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

<style scoped>

  .menu{
    width:180px;
    display: inline-block;


  }

</style>
