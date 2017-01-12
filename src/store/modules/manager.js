/**
 * Created by hong on 2017/1/8.
 */


import actions from './manager/actions';
import mutations from './manager/mutations';
import getters from './manager/getters';


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


    cview: '',
    curid: '',
    datanum: 0,
    multipleSelection: [],

    exportflag: 0,

    bill: {}

  }
}



export default  {
  state,
  actions,
  mutations,
  getters
}
