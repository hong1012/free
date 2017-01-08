<template>
  <div>
    <div class="head">

      <span>部门</span>
      <el-select :value="dept" placeholder="" @input="deptSelect">
        <el-option
          v-for="item in depts"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <span>类型</span>
      <el-select :value="type" placeholder="请选择" @input="typeSelect">
        <el-option
          v-for="item in types"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <span>状态</span>
      <el-select :value="status" placeholder="请选择" @input="statusSelect">
        <el-option
          v-for="item in statuss"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-input style='display: inline-block;width:180px;'
                placeholder="请输入报销人/单号" :value="keyword" @change="inputChange">
      </el-input>

      <el-button @click="searchData">查询</el-button>
      <el-button @click="exportClick" type="primary">导出</el-button>
      <span>{{exportflag}}<span/>

    </div>
    <el-table
      v-loading="tbloading"
      element-loading-text="拼命加载中"
      :data="tbData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="操作" width="80">
        <template scope="scope">
          <el-button @click="handleClick(scope)" type="text" size="small">{{ getOptTitle(scope.row) }}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="日期" width="120">
        <template scope="scope">{{ scope.row.time }}</template>
      </el-table-column>
      <el-table-column prop="name" label="报销人" width="100"></el-table-column>
      <el-table-column prop="department" label="部门" width="100"></el-table-column>
      <el-table-column prop="type" label="类型" width="120"></el-table-column>
      <el-table-column prop="reason" label="事由"></el-table-column>
      <el-table-column prop="money" label="金额" width="80"></el-table-column>
      <el-table-column prop="id" label="单据编号" width="120"></el-table-column>
      <el-table-column prop="status" label="状态" width="80"></el-table-column>
      <el-table-column prop="payTime" label="付款时间" width="180"></el-table-column>

    </el-table>

    <el-pagination v-if="false" style="float: right;margin-right: -5px;"
                   layout="prev, pager, next" :total="datanum"></el-pagination>

    <div v-if="cview != '' " class="subview">
      <comment :is="cview" v-on:closeSubview="closeSubview" :id="curid">
      </comment>
    </div>


  </div>

</template>


<script>


  import BillView from './BillView'
  import BillCheck from './BillCheck'
  import BillPay from './BillPay'

  import {mapGetters, mapActions} from 'vuex'


  export default {
    components: {
      BillView, BillCheck, BillPay
    },
    data: function () {
      return {}
    },
    computed: {

      exportflag: function () {
        return this.$store.getters.getExportflag;
      },
      ...mapGetters([
        'dept', 'depts', 'keyword', 'types', 'type', 'statuss', 'status', 'tbData',
        'tbloading', 'cview', 'curid', 'datanum', 'multipleSelection'])

  }
  ,

  methods: {

  ...mapActions([
      'inputChange', 'exportClick', 'deptSelect', 'getData', 'searchData', 'typeSelect',
      'statusSelect', 'handleClick', 'closeSubview'
    ]),


      handleSelectionChange
  :
    function (val) {
      this.multipleSelection = val;
    }

  ,


    getOptTitle: function (row) {
      var info = {
        'pass': '审核',
        'submit': '审核',
        'checked': '支付',
        'pay': '查看'
      };
      return info[row.statusCode] || '';
    }
  },

  created:function () {
    this.$store.dispatch('getDepts');
  },

  mounted: function () {
    this.$store.dispatch('searchData');
  }


  }


</script>

<style lang="less" scoped>

  .head {
    padding: 10px;
    margin: 10px;
  }

  .subview {

    position: absolute;
    top: 0;
    left: 180px;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: #ffffff;
  }

</style>

