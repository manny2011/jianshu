import { constants } from './index';
import axios from 'axios';

const homeData = (data)=>({
  type:constants.HOME_DATA,
  topicData:data.topicList,
  articleData:data.articleList,
  recommendData:data.recommendList,
  writerData:data.writerData,
})

export const getHomeData = (page) => {//注意这里有两个函数，第一个是给组件调用的，第二个是给thunk调用的！
  return (dispatch) => axios.get('/api/home.json?page='+page)
    .then(res => {
      console.log(res.data);
      console.log('currentPage='+page);
      if(res.data.success){
        dispatch(homeData(res.data.data));
      }else{
        console.log("no home data");
      }
    })
    .catch(err=>{
      console.log(err);
    });
}
export const setIfShowBack2TopBtn = (ifShow) =>({
  type:constants.SCROLL2TOP_FLAG,
  data:ifShow,
})
