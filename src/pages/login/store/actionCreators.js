import axios from 'axios';
import { constants } from './index';

const UpdateLoginStatus = (data) =>({
    type:constants.UPDATE_LOGIN_STATUS,
    loginStatus:data.loginStatus,
})

export const Logout = () =>({
  type:constants.UPDATE_LOGIN_STATUS,
  loginStatus:false,
})

export const Login = (account,pwd)=>{
  return (dispatch)=>{//返回必须是个函数，要被store中的中间件调用的。
    axios.get('/api/login.json?account='+account + '&pwd=' + pwd)
      .then((res)=>{
        console.log(res);
        dispatch(UpdateLoginStatus(res.data.data));
      });
  }
}