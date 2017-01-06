<template>
  <div>
    <div class="head">

      <span>部门</span>
      <el-select v-model="dept" placeholder="" @change="deptSelect">
        <el-option
          v-for="item in depts"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <span>类型</span>
      <el-select v-model="type" placeholder="请选择" @change="typeSelect">
        <el-option
          v-for="item in types"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <span>状态</span>
      <el-select v-model="status" placeholder="请选择" @change="statusSelect">
        <el-option
          v-for="item in statuss"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-input style='display: inline-block;width:180px;'
                placeholder="请输入报销人/单号" v-model="keyword">
      </el-input>

      <el-button @click="queryClick">查询</el-button>
      <el-button type="primary">导出</el-button>

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
    <el-pagination style="float: right;margin-right: -5px;"
                   layout="prev, pager, next" :total="datanum"></el-pagination>

    <div v-if="cview != '' " class="subview">
      <comment :is="cview" v-on:closeSubview="closeSubview" :id="curid">
      </comment>
    </div>


  </div>

</template>


<script>


  import AppData from '../../AppData'
  import Api from '../../utils/Api'
  import Utils from '../../utils/utils'

  import BillView from './BillView'
  import BillCheck from './BillCheck'
  import BillPay from './BillPay'


  let typelist = [{
    value: '0',
    label: '全部'
  }, {
    value: '1',
    label: '日常报销单'
  }, {
    value: '2',
    label: '差旅报销单'
  }];


  let statuslist = [{
    value: '',
    label: '全部'
  }, {
    value: '已支付',
    label: '已支付'
  }, {
    value: '待支付',
    label: '待支付'
  }, {
    value: '审核中',
    label: '审核中'
  }];



  export default {
    components: {
      BillView, BillCheck, BillPay
    },
    data: function () {
      return {
        depts: [{value: "-1",label: '全部'}],
        dept: '-1',
        types: typelist,
        type: '0',
        statuss: statuslist,
        status: '',
        keyword: '',

        cview: '',
        curid: '',
        datanum: 28,
        tbloading: false,

        tbData: [],
        multipleSelection: []
      }
    },


    methods: {

      queryClick: function () {
        this.searchData();
      },

      deptSelect: function () {
        console.log('deptSelect:'+this.dept);
        this.searchData();
      },
      statusSelect: function () {
        this.searchData();
      },

      typeSelect: function () {
        this.searchData();
      },

      handleSelectionChange: function (val) {
        this.multipleSelection = val;
      },

      handleClick: function (scope) {
        this.curid = scope.row.id;
        var btn = getTitle(scope.row);
        var info={
          '审核':'BillCheck',
          '查看':'BillView',
          '支付':'BillPay'
        };
        this.cview = info[btn] || '';
      },

      getOptTitle: getTitle,

      closeSubview: function (subview) {
        this.cview = subview;
      },

      getData:function() {

        var param = {
          "startDate": "2001-01-01",
          "endDate": "2100-01-01",
          "type": this.type,
          'others': this.keyword,
          'status': this.status,
          "pager": {
            "page": 1,
            "rows": 50
          }
        };

        if(this.dept!="-1"){
          param.department=this.dept;
        }

        var that=this;
        this.tbloading=true;
        Api.post({
          'url': 'doc/list?' + AppData.getData().author,
          'param': param,
          'fnSuccess': function (data) {
            that.tbloading=false;
            that.tbData = Utils.connect(that.tbData, data);
          }
        });
      },

      searchData:function() {
        this.tbData = Utils.empty(this.tbData);
        this.getData();
      }

    },

    created:function () {
      let that=this;
      Api.get({
        'url': 'departments?' + AppData.getData().author,
        'fnSuccess': function (data) {
          that.depts=setDepts(that.depts,data);
        }
      });
    },
    mounted: function () {
      this.searchData();
    }
  }

  function setDepts(depts,data) {
    for(var i in data){
      depts.push({
        value:data[i],
        label:data[i]
      });
    }
    return depts;
  }

  function getTitle(row) {
    var info={
      'pass':'审核',
      'submit':'审核',
      'checked':'支付',
      'pay':'查看'
    };
    return info[row.statusCode] || '';
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

