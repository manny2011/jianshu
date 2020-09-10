import axios from 'axios';
import { constants } from './index';

export const detailData = (data)=>{
  return {
    type:constants.DETAIL_DATA,
    title:data.title,
    content:data.content,
  }
}
export const getDetailData = (id)=>{//异步action 返回的是一个可执行的函数的引用，同步action返回一个数据对象(which must has a type)
  return (dispatch)=> axios.get('/api/detail.json?id='+id)
    .then(data=>{
      console.log(data);
      if(data.status === 200){
        dispatch(detailData(data.data.data));
      }else{
        console.log(data.statusText);
      }
    });
}