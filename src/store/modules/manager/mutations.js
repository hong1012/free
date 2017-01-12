
import Utils from '../../../utils/utils'

const mutations = {
  ExportClick (state, amount) {
    state.manager.exportflag = state.manager.exportflag + amount;
  },
  SetSubView(state, cview) {
    state.manager.cview = cview;
  },
  SetCurid (state, curid) {
    state.manager.curid = curid;
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
  GetBill (state, data) {
    state.manager.bill = data;
  }
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

export default mutations
