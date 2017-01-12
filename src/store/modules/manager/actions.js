

import AppData from '../../../AppData'
import Api from '../../../utils/Api'



const actions = {
  exportClick: function ({commit}, num) {
    commit('ExportClick', 5);
  },
  closeSubview: function ({commit}, subview) {
    commit('SetSubView', subview);
  },
  handleClick: function ({commit},scope) {
    commit('SetCurid', scope.row.id);
    var info={
      'pass':'BillCheck',
      'submit':'BillCheck',
      'pay':'BillView',
      'checked':'BillPay'
    };
    let cview = info[scope.row.statusCode] || '';
    commit('SetSubView', cview);
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

  searchData:searchData,

  getBill: function ({commit}, billid) {
    getBill({commit,state},billid);

  }

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

function getBill({commit,state},billid) {

  console.log('id:'+billid);
  Api.get({
    'url': 'doc?' + AppData.getData().author+'&id='+billid,
    'fnSuccess': function (data) {
      console.log(data);
      //commit('GetBill', data);
    }
  });
}





export default actions
