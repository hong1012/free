<template>
  <div class="cost-detail">
    <div class="pro">
      <p>
        <span class="name">日期:</span><span class="num special1">2016-12-22</span>
        <span class="name">类型:</span><span class="num special2">日常报销单</span>
        <span class="name">报销人:</span><span class="num">小名/财务</span>
      </p>
      <p>
        <span class="name">事由:</span><span class="num">出差餐费报销</span>
      </p>
      <p>
        <span class="name">备注:</span><span class="num">请尽快处理</span>
      </p>
    </div>

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
          <td><img src="../assets/image/meal.png" />餐饮</td>
          <td>80.00</td>
          <td>请尽快</td>
          <td><span class="file"></span></td>
          <td></td>
        </tr>
        <tr>
          <td><img src="../assets/image/plane.png" />交通</td>
          <td>80.00</td>
          <td>请尽快</td>
          <td><span class="file"></span></td>
          <td></td>
        </tr>
         <tr>
          <td><img src="../assets/image/bonus.png" />补贴</td>
          <td>80.00</td>
          <td>请尽快</td>
          <td><span class="file"></span></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div class="summary">总计：<span>60</span>元</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },

    methods: {

    }
  }
</script>


<style lang="less" scoped>

  .cost-detail {
    position:relative;
    border-top: 1px solid #ebebeb;

    .pro {
      padding: 0 20px;
      font-size: 12px;
      >p {
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
    table {
      width: 100%;
      border-spacing: 0px;
      font-size:12px;
      border-top:1px solid #ebebeb;
      td {
        border-bottom: 1px solid #ebebeb;
        border-right: 1px solid #ebebeb;
        height: 34px;
        text-align:center;
        width:160px;
        padding:0 10px;

       img{
         margin:5px 5px 5px 0px;
         float:left;
       }
        &:nth-child(3){
          width:220px;
        }
        &:last-child{
          width:auto;
        }
      }
      thead {
        background-color: #f9f9f9;
      }
      tbody{
        td:first-child{
          text-align:left;
          line-height:34px;
        }
        td:nth-child(2){
          text-align:right;
        }
        td:last-child{
          font-size:0;
        }
        .file{
          display:inline-block;
          height:34px;
          width:34px;
          background:url('../assets/image/accs.png') no-repeat;
          background-position:center;
        }
      }
    }
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
  }
</style>
