

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
  tbloading:state =>state.manager.tbloading,
  curid:state =>state.manager.curid,
  cview:state =>state.manager.cview,
  datanum:state =>state.manager.datanum,
  multipleSelection:state =>state.manager.multipleSelection,


  bill:state =>state.manager.bill

}


export default getters
