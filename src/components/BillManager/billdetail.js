/**
 * Created by hong on 2017/1/13.
 */


export function getSteps(data){

  var len=data.length;
  for(var i=0;i<len;i++){
    if(i==len-1){
      data[i].cname='latest';
      data[i].end=true;
    }else{
      data[i].cname='past';
    }

  }
  return data;

}
