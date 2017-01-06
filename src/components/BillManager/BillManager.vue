<template>
  <div>
    <div class="head">

      <span>部门</span>
      <el-select v-model="dept" placeholder="请选择">
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


  let deptlist = [{
    value: '',
    label: '全部'
  }];

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

  let queryinfo = {
    'department': '',
    'others': '',
    'status': '',
    'type': 0
  };


  export default {
    components: {
      BillView, BillCheck, BillPay
    },
    data: function () {
      return {
        depts: deptlist,
        dept: '',
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
        queryinfo.others = this.keyword;
        this.searchData();
      },

      statusSelect: function (text) {
        queryinfo.status = text;
        this.searchData();
      },

      typeSelect: function (text) {
        queryinfo.type = text;
        this.searchData();
      },

      handleSelectionChange: function (val) {
        this.multipleSelection = val;
      },

      handleClick: function (scope) {
        this.curid = scope.row.id;
        var btn = getTitle(scope.row);
        switch (btn) {
          case '':
            this.cview = '';
            break;
          case '审核':
            this.cview = 'BillCheck';
            break;
          case '查看':
            this.cview = 'BillView';
            break;
          case '支付':
            this.cview = 'BillPay';
            break;
        }
        //console.dir(scope.row);
      },

      getOptTitle: getTitle,

      closeSubview: function (subview) {
        this.cview = subview;
      },

      getData:function() {

        var param = {
          "startDate": "2001-01-01",
          "endDate": "2100-01-01",
          "type": queryinfo.type,
          /*    'department':queryinfo.department,*/
          'others': queryinfo.others,
          'status': queryinfo.status,
          "pager": {
            "page": 1,
            "rows": 50
          }
        };
        var that=this;
        Api.post({
          'url': 'doc/list?' + AppData.getData().author,
          'param': param,
          'fnSuccess': function (data) {
            that.tbData = Utils.connect(that.tbData, data);
          }
        });
      },

      searchData:function() {
        this.tbData = Utils.empty(this.tbData);
        this.getData();
      }

    },

    mounted: function () {
      this.searchData();
    }
  }

  function getTitle(row) {

    let btn = '';
    if (row.statusCode == 'pass' || row.statusCode == 'submit') {
      btn = '审核';
    }
    else if (row.statusCode == 'checked') {
      btn = '支付';
    }
    else if (row.statusCode == 'pay') {
      btn = '查看';
    }
    return btn;

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

