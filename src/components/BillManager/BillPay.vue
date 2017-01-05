<template>
  <div>
    <div>
      支付视图 单据编号: {{id}}
    </div>
    <el-button @click="close">关闭</el-button>
  </div>

</template>


<script>


  export default {
    props: ['id'],
    data: function () {
      return {}
    },

    methods: {
      close: function () {
        this.$emit('closeSubview');
      }


    },

    mounted: function () {

    }
  }
</script>

<style lang="less" scoped>


</style>

