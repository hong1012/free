<template>
  <div class="pop">
    <div class="pop-detail">
      <p class="title">驳回报销单 <span class="close"></span></p>

      <div class="textarea" style="display:none">
        <textarea placeholder="请输入驳回理由"></textarea>
      </div>

      <div class="alert">
        作废后不能恢复，您确定继续吗？
      </div>

      <div class="icon-bar">
        <button class="sure">确定</button>
        <button class="cancel">取消</button>
      </div>
    </div>
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
  .pop {
    position:relative;
    background-color: rgba(0, 0, 0, 0.3);
    .pop-detail {
      width: 440px;
      position: absolute;
      top: 25%;
      left: 50%;
      margin-left: -220px;
      background-color: #fff;
      box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);
    }
    .title {
      background-color: #fa7e47;
      color: #fff;
      padding-left: 10px;
      height: 30px;
      line-height: 30px;
      margin: 0;
      font-size: 12px;
    }
    .close {
      float: right;
      height: 30px;
      width: 30px;
      background: url('../assets/image/close.png') no-repeat;
      background-position: center;
    }
    .textarea {
      padding: 30px;

      textarea {
        width: 100%;
        border: 1px solid #ebebeb;
        outline: none;
        resize: none;
        height: 120px;
        color: #555;
        font-size: 12px;
        padding: 10px;
        box-sizing: border-box;
        &:-webkit-textarea-placeholder {
          color: #999;
        }
      }
    }

    .alert{
      height:180px;
      line-height:180px;
      color:#555;
      text-align:center;
      font-size:13px;
      &:before{
        content:'';
        display:inline-block;
        height:30px;
        width:30px;
        background:url('../assets/image/warn.png') no-repeat;
        background-position:center;
        vertical-align:middle;
        margin-right:4px;
        margin-bottom:2px;
      }
    }
    .icon-bar {
      height: 50px;
      line-height: 50px;
      border-top: 1px solid #ebebeb;
      text-align: right;
      button {
        height: 24px;
        line-height: 24px;
        width: 60px;
        margin-right: 10px;
        text-algin: center;
        padding: 0;
        border: none;
        border-radius: 4px;
        outline: none;
      }
      .sure {
        background-color: #fa7e47;
        color: #fff;
      }
      .cancel {
        background-color: #fff;
        color: #fa7e47;
        border: 1px solid #fa7e47;
        line-height: 22px;
        box-sizing: border-box;
      }
    }
  }
</style>