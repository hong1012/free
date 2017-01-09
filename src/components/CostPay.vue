<template>
  <div class="head">
    <div class="icon-bar"><button>同意</button><button>驳回</button><button>打印</button></div>
    <ul class="status">
      <li class="first">
        <p class="time">2016-10-13&ensp;11:45:02</p>
        <p class="icon"></p>
        <p class="tips">小明已提交审核</p>
      </li>
      <li class="second">
        <p class="time">2016-10-13&ensp;11:45:02</p>
        <p class="icon"></p>
        <p class="tips">小明已提交审核</p>
      </li>
      <li class="third">
        <p class="time">2016-10-13&ensp;11:45:02</p>
        <p class="icon"></p>
        <p class="tips">小明已提交审核</p>
      </li>
      <li class="forth">
        <p class="time">2016-10-13&ensp;11:45:02</p>
        <p class="icon"></p>
        <p class="tips">小明已提交审核</p>
      </li>
    </ul>
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
  .head {
    padding: 16px 20px 60px 20px;
    border-bottom: 1px solid #e0e0e0;
    .icon-bar {
      text-align: right;
      button {
        width: 90px;
        text-align: center;
        height: 28px;
        display: inline-block;
        background-color: #fff;
        color: #fa7e47;
        border: 1px solid #fa7e47;
        outline: none;
        margin-left: 20px;
        border-radius: 4px;
      }
      button:first-child {
        background-color: #fa7e47;
        color: #fff;
      }
    }
    .status {
      padding: 30px 55px;
      li {
        display: inline-block;
        list-style: none;
        text-align: center;
        width: 190px;
        position: relative;
        font-size: 0;
        .time {
          height: 38px;
          line-height: 30px;
          width: 160px;
          margin: 0 auto;
          font-size: 14px;
        }
        .icon {
          height: 28px;
          width: 28px;
          border-radius: 50%;
          background-position: center;
          display: inline-block;
          margin: 20px 0;
        }
        .tips {
          color: #fa7e47;
          font-size: 12px;
          margin: 0;
          height: 38px;
        }
        &.first,
        &.second,
        &.third {
          &::after {
            content: '';
            display: inline-block;
            width: 127px;
            height: 14px;
            background-image: url('../assets/image/timeline-orange.png');
            background-position: center;
            position: absolute;
            top: 50%;
            margin-top: -7px;
            right: -64px;
          }
        }
        &.first {
          .icon {
            background-image: url('../assets/image/complate.png');
          }
          .time {
            background-image: url('../assets/image/time-gray.png');
            color: #999;
          }
        }
        &.second {
          .icon {
            background-image: url('../assets/image/complate.png');
          }
          .time {
            background-image: url('../assets/image/time-orange.png');
            color: #fa7e47;
          }
        }
        &.third {
          .icon {
            background-image: url('../assets/image/now.png');
          }
          .time {
            visibility: hidden;
          }
          &::after {
            background-image: url('../assets/image/timeline-gray.png');
            content: '';
          }
        }
        &.forth {
          .time {
            display: none;
          }
          .icon {
            background-image: url('../assets/image/end.png');
          }
        }
      }
    }
  }
</style>