<template>

  <div class="summary">总计：<span>{{data.money}}</span>元</div>

</template>


<script>

  export default {
    props: ['data'],
    data: function () {
      return {
      }
    }
  }

</script>



<style lang="less" scoped>


  .summary{
    position:fixed;
    bottom:0;
    padding:0 10px;
    height:50px;
    line-height:50px;
    border-top:1px solid #ebebeb;
    width:100%;
    box-sizing:border-box;
    font-size:12px;

  span{
    font-size:20px;
    color:#fa7e47;
    margin-right:4px;
  }
  }


</style>
