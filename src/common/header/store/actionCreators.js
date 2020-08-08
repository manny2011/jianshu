import * as constants from './constants';
import axios from 'axios';

//reducer中都是纯函数
const searchList = (data) => {
  return {
    type: constants.SEARCH_DATA,
    data
  }
}

/////////////////内部在上//////////////////////
/////////////////divider//////////////////////
/////////////////导出在下//////////////////////

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
})
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
})

export const getSearchList = () => {//注意这里返回的是一个函数action对象
  return (dispatch) => {
    axios.get("http://localhost:3000/api/searchList.json")
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          dispatch(searchList(res.data.data));
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
}
export const mouseEnter = ()=>{
  return {
    type: constants.MOUSE_ENTER,
  }
}
export const mouseLeave = ()=>{
  return {
    type: constants.MOUSE_LEAVE,
  }
}
export const handleChangePage = ()=>{
  return {
    type: constants.CHANGE_PAGE,
  }
}