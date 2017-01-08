/**
 * Created by hong on 2017/1/8.
 */

import AppData from '../../AppData'
import Api from '../../utils/Api'
import Utils from '../../utils/utils'


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



const state = {
  manager: {
    depts: [{value: "-1", label: '全部'}],
    dept: '-1',

    types: typelist,
    type: '0',
    statuss: statuslist,
    status: '',

    keyword: '',

    tbData:[],
    tbloading:false,
    exportflag: 0
  }
}

const actions = {
  exportClick: function ({commit}, num) {
    commit('ExportClick', 5);
  },

  deptSelect: function ({commit,state}, value) {
    commit('DeptSelect', value);
    searchData({commit,state});
  },
  typeSelect: function ({commit,state}, value) {
    commit('TypeSelect', value);
    searchData({commit,state});
  },
  statusSelect: function ({commit,state}, value) {
    commit('StatusSelect', value);
    searchData({commit,state});
  },

  getDepts: function ({commit}) {
    Api.get({
      'url': 'departments?' + AppData.getData().author,
      'fnSuccess': function (data) {

        commit('GetDepts', data);
      }
    });
  },
  inputChange:function({commit},key){
    commit('InputKeyword', key);
  },
  getData:getData,

  searchData:searchData
}

const mutations = {
  ExportClick (state, amount) {
    state.manager.exportflag = state.manager.exportflag + amount;
  },
  GetDepts (state, data) {
    var depts = setDepts(state.manager.depts, data);
    state.manager.depts = depts;
  },
  InputKeyword (state,key) {
    state.manager.keyword = key;
  },
  TbLoading (state,value) {
    state.manager.tbloading = value;
  },

  DeptSelect (state,value) {
    state.manager.dept = value;
  },
  TypeSelect (state,value) {
    state.manager.type = value;
  },
  StatusSelect (state,value) {
    state.manager.status = value;
  },
  GetData (state,data) {
    state.manager.tbloading=false;
    state.manager.tbData = Utils.connect(state.manager.tbData, data);
  },
  SearchData (state,data) {
    state.manager.tbData = Utils.empty(state.manager.tbData);
  },
}

const getters = {
      getExportflag: state => state.manager.exportflag,
      dept:state =>state.manager.dept,
      depts:state =>state.manager.depts,
      keyword:state =>state.manager.keyword,
      types:state =>state.manager.types,
      type:state =>state.manager.type,
      statuss:state =>state.manager.statuss,
      status:state =>state.manager.status,
      tbData:state =>state.manager.tbData,
      tbloading:state =>state.manager.tbloading
}

function getData({commit,state}) {
    var manager=state.manager;
    var param = {
      "startDate": "2001-01-01",
      "endDate": "2100-01-01",
      "type": manager.type,
      'others': manager.keyword,
      'status': manager.status,
      "pager": {
        "page": 1,
        "rows": 50
      }
    };

    if(manager.dept!="-1"){
      param.department=manager.dept;
    }
    commit('TbLoading', true);
    Api.post({
      'url': 'doc/list?' + AppData.getData().author,
      'param': param,
      'fnSuccess': function (data) {
        commit('GetData', data);
      }
    });
}

function searchData({commit,state}) {
  commit('SearchData');
  getData({commit,state});
}

function setDepts(depts, data) {
  for (var i in data) {
    depts.push({
      value: data[i],
      label: data[i]
    });
  }
  return depts;
}

export default  {
  state,
  actions,
  mutations,
  getters
}
