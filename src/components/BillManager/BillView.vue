<template>

  <div class="head">
    <div>查看</div>
    <div class="icon-bar"><button>同意</button><button>驳回</button><button @click="close">打印</button></div>
    <vStep :data="bill.histories"></vStep>
    <div class="info">
      <p>
        <span class="title">日期:</span>{{bill.time}}<span></span>
        <span class="title">类型:</span><span>{{bill.type}}</span>
        <span class="title">报销人:</span><span>{{bill.name}}</span>
      </p>
      <p> <span class="title">事由:</span><span>{{bill.reason}}</span></p>
      <p> <span class="title">备注:</span><span>{{bill.desc}}</span></p>

    </div>
    <div class="tblist">

    </div>
    <div>总计:<span>{{bill.money}}</span>元</div>

  </div>
</template>


<script>

  import AppData from '../../AppData'
  import Api from '../../utils/Api'
  import vStep from './Steps/Step'

  import {mapGetters, mapActions} from 'vuex'
  import Vue from 'vue'

  export default {
    props: ['billid'],
    data: function () {
      return {
        bill:{
          name:'红歌',
          histories:{
            'a1':'测试1',
            'a2':'测试2'
          }
        }
      }
    },
    components:{
      vStep
    },
    methods: {
      ...mapActions([]),
    close: function () {
      this.$emit('closeSubview', '');
    },
    getBill:function(){
      var that=this;
      Api.get({
        'url': 'doc?' + AppData.getData().author+'&id='+that.billid,
        'fnSuccess': function (data) {

          //console.log(JSON.stringify(list));

          data.histories=getSteps(data.histories);
          that.bill=data;
         // console.log(JSON.stringify(that.bill));

        }
      });

    }

  },
  computed: {
    //...mapGetters(['bill'])
  },
  mounted: function () {
    this.getBill();
    //this.$store.dispatch('getBill',this.billid);
  }
  }


  function getSteps(data){

    var len=data.length;
    for(var i=0;i<len;i++){
      if(i==len-1){
        data[i].cname='latest';
        data[i].end=true;
      }else{
        data[i].cname='past';
      }


    }
    return data;

  }


</script>



<style lang="less" scoped>
  .head {
    padding: 16px 20px 60px 20px;
    border-bottom: 1px solid #e0e0e0;
  .icon-bar {
  /*      text-align: right;*/
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
     background-image: url('../../assets/images/timeline-orange.png');
     background-position: center;
     position: absolute;
     top: 50%;
     margin-top: -7px;
     right: -64px;
   }
  }
  &.past {
  .icon {
    background-image: url('../../assets/images/complate.png');
  }
  .time {
    background-image: url('../../assets/images/time-gray.png');
    color: #999;
  }
  }
  &.latest {
  .icon {
    background-image: url('../../assets/images/complate.png');
  }
  .time {
    background-image: url('../../assets/images/time-orange.png');
    color: #fa7e47;
  }
  }

  &.current {
  .icon {
    background-image: url('../../assets/images/now.png');
  }
  .time {
    visibility: hidden;
  }
  &::after {
     background-image: url('../../assets/images/timeline-gray.png');
     content: '';
   }
  }

  &.future {
    .time {
      display: none;
    }
    .icon {
      background-image: url('../../assets/images/end.png');
    }
  }

  }
  }
  }
</style>
