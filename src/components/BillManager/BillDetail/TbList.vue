<template>


  <table>
    <thead>
    <tr>
      <td>费用类型</td>
      <td>金额</td>
      <td>备注</td>
      <td>附件</td>
      <td></td>

    </tr>

    </thead>
    <tbody>
    <tr>
      <td><img src="../../../assets/images/meal.png" />餐饮</td>
      <td>80.00</td>
      <td>请尽快</td>
      <td><span class="file"></span></td>
      <td></td>
    </tr>
    <tr>
      <td><img src="../../../assets/images/plane.png" />交通</td>
      <td>80.00</td>
      <td>请尽快</td>
      <td><span class="file"></span></td>
      <td></td>
    </tr>
    <tr>
      <td><img src="../../../assets/images/bonus.png" />补贴</td>
      <td>80.00</td>
      <td>请尽快</td>
      <td><span class="file"></span></td>
      <td></td>
    </tr>
    </tbody>
  </table>

</template>


<script>

  export default {

    data: function () {
      return {
      }
    }
  }

</script>



<style lang="less" scoped>

  table {
    width: 100%;
    border-spacing: 0px;
    font-size: 12px;
    border-top: 1px solid #ebebeb;

  td {
    border-bottom: 1px solid #ebebeb;
    border-right: 1px solid #ebebeb;
    height: 34px;
    text-align: center;
    width: 160px;
    padding: 0 10px;

  img {
    margin: 5px 5px 5px 0px;
    float: left;
  }

  &
  :nth-child(3) {
    width: 220px;
  }

  &
  :last-child {
    width: auto;
  }

  }
  thead {
    background-color: #f9f9f9;
  }

  tbody {

  td:first-child {
    text-align: left;
    line-height: 34px;
  }

  td:nth-child(2) {
    text-align: right;
  }

  td:last-child {
    font-size: 0;
  }

  .file {
    display: inline-block;
    height: 34px;
    width: 34px;
    background: url('../../../assets/images/accs.png') no-repeat;
    background-position: center;
  }

  }
  }




</style>
