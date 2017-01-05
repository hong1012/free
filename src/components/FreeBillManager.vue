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
      :data="tableData3"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="日期"
        width="120">
        <template scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="datanum">
    </el-pagination>
  </div>

</template>

<script>

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

  function getData() {

/*
    var param = {
      "startDate": "2001-01-01",
      "endDate": "2100-01-01",
      "type": queryinfo.type,
      /!*    'department':queryinfo.department,*!/
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

      }
    });
    */
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


        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style  lang="less"  scoped>

 .head{
   padding: 10px;
   margin: 10px;
 }

</style>

