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
      <el-select v-model="type" placeholder="请选择">
        <el-option
          v-for="item in types"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <span>状态</span>
      <el-select v-model="status" placeholder="请选择">
        <el-option
          v-for="item in statuss"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-input style='display: inline-block;width:180px;'
                placeholder="请输入报销人/单号" v-model="keyword">
      </el-input>

      <el-button >查询</el-button>
      <el-button type="primary">导出</el-button>

    </div>
    <el-table
      :data="tbData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期" width="120">
        <template scope="scope">{{ scope.row.time }}</template>
      </el-table-column>
      <el-table-column prop="name" label="报销人" width="100"></el-table-column>
      <el-table-column prop="department" label="部门"  width="100"></el-table-column>
      <el-table-column prop="type" label="类型"  width="120"></el-table-column>
      <el-table-column prop="reason" label="事由" ></el-table-column>
      <el-table-column prop="money" label="金额"  width="80"></el-table-column>
      <el-table-column prop="id" label="单据编号"  width="120"></el-table-column>
      <el-table-column prop="status" label="状态"  width="80"></el-table-column>
      <el-table-column prop="payTime" label="付款时间"  width="180"></el-table-column>

    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="datanum">
    </el-pagination>
  </div>

</template>



<script>


  import AppData from '../AppData'
  import Api from '../utils/Api'
  import Utils from '../utils/utils'

  let deptlist=[{
    value: '',
    label: '全部'
  }];

  let typelist=[{
    value: '0',
    label: '全部'
  },{
    value: '1',
    label: '日常报销单'
  },{
    value: '2',
    label: '差旅报销单'
  }];


  let statuslist=[{
    value: '',
    label: '全部'
  },{
    value: '已支付',
    label: '已支付'
  },{
    value: '待支付',
    label: '待支付'
  },{
    value: '审核中',
    label: '审核中'
  }];

  let queryinfo = {
    'department': '',
    'others': '',
    'status': '',
    'type': 0
  };

  let tbData=[];



  function getData() {

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


    Api.post({
      'url': 'doc/list?' + AppData.getData().author,
      'param': param,
      'fnSuccess': function (data) {
        tbData=Utils.connect(tbData,data);
      }
    });
  }

  export default {
     data:function() {
      return {

        depts:deptlist,
        dept:'',

        types:typelist,
        type:'0',

        statuss:statuslist,
        status:'',
        keyword:'',

        datanum:28,

        tbData: tbData,
        multipleSelection: []
      }
    },

    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
    mounted:function () {
      getData();
    }
  }
</script>

<style  lang="less"  scoped>

 .head{
   padding: 10px;
   margin: 10px;
 }

</style>

