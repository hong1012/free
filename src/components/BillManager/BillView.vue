<template>

  <div>
    <div class="head">
      <div  class="icon-bar"><button>同意</button><button>驳回</button><button @click="close">关闭</button></div>
      <vStep :data="bill.histories"></vStep>
    </div>
    <vInfo :data="bill"></vInfo>
    <vTbList :data="bill.consumptions"></vTbList>
    <vFooter :data="bill"></vFooter>
    <div>查看</div>
  </div>


</template>


<script>

  import AppData from '../../AppData'
  import Api from '../../utils/Api'
  import vStep from './BillDetail/Step'
  import vInfo from './BillDetail/Info'
  import vTbList from './BillDetail/TbList'
  import vFooter from './BillDetail/Footer'

  import {mapGetters, mapActions} from 'vuex'
  import Vue from 'vue'
  import {getSteps} from './billdetail'

  export default {
    props: ['billid'],
    data: function () {
      return {
        bill:{
        }
      }
    },
    components:{
      vStep,vInfo,vTbList,vFooter
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





</script>


<style lang="less" scoped>
  .head {
    padding: 16px 20px 60px 20px;
    border-bottom: 1px solid #e0e0e0;
  .icon-bar {
/*  text-align: right;*/
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


  }


</style>
