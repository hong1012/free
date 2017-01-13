<template>

  <div class="pro">
    <p>
      <span class="name">日期:</span><span class="num special1">{{data.time}}</span>
      <span class="name">类型:</span><span class="num special2">{{data.type}}</span>
      <span class="name">报销人:</span><span class="num">{{data.name}}</span>
    </p>
    <p>
      <span class="name">事由:</span><span class="num">{{data.reason}}</span>
    </p>
    <p>
      <span class="name">备注:</span><span class="num">{{data.desc}}</span>
    </p>
  </div>

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


  .pro {
    padding: 0 20px;
    font-size: 14px;

  >
  p {
    margin: 16px 0;
  }

  .special1 {
    margin-right: 100px;
  }

  .special2 {
    margin-right: 120px;
  }

  .name {
    color: #555;
  }

  .num {
    color: #999;
  }

  }

</style>
