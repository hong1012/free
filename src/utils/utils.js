/**
 * Created by hong on 2016/12/23.
 */


function connect(src,target) {
  var len=target.length;
  for(let i=0;i<len;i++){
    src.push(target[i]);
  }
  return src;
}



export default {
  connect
}
