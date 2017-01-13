<template>

    <ul class="status">
      <li  v-for="item in data" :class="{'past':item.cname=='past','latest':item.cname=='latest','end':item.end}"  >
        <p class="time">{{item.date}}</p>
        <p class="icon"></p>
        <p class="tips">{{item.fromName}}</p>
      </li>
    </ul>

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
  &.end{
  &:after{
     display:none!important;
   }
  }
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

  &.past,
  &.latest,
  &.current {
  &::after {
     content: '';
     display: inline-block;
     width: 127px;
     height: 14px;
     background-image: url('../../../assets/images/timeline-orange.png');
     background-position: center;
     position: absolute;
     top: 50%;
     margin-top: -7px;
     right: -64px;
   }
  }
  &.past {
  .icon {
    background-image: url('../../../assets/images/complate.png');
  }
  .time {
    background-image: url('../../../assets/images/time-gray.png');
    color: #999;
  }
  }
  &.latest {
  .icon {
    background-image: url('../../../assets/images/complate.png');
  }
  .time {
    background-image: url('../../../assets/images/time-orange.png');
    color: #fa7e47;
  }
  }

  &.current {
  .icon {
    background-image: url('../../../assets/images/now.png');
  }
  .time {
    visibility: hidden;
  }
  &::after {
     background-image: url('../../../assets/images/timeline-gray.png');
     content: '';
   }
  }

  &.future {
  .time {
    display: none;
  }
  .icon {
    background-image: url('../../../assets/images/end.png');
  }
  }

  }
  }
  }
</style>
