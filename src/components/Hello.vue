<template>
  <div class="hello">
    <div v-if="cview === 'BillView'">
      <div class="subview">
        <BillView v-on:closeSubview="closeSubview"  :id="curid"></BillView>
      </div>
    </div>
    <div v-else-if="cview === 'BillCheck'">
      <div class="subview">
        <BillCheck v-on:closeSubview="closeSubview"   :id="curid"></BillCheck>
      </div>
    </div>
    <div v-else-if="cview === 'BillPay'">
      <div class="subview">
        <BillPay v-on:closeSubview="closeSubview"   :id="curid"></BillPay>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        msg: 'hello 1'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
    background: red;

  li {

    margin: 20px;
  }

  }


</style>
