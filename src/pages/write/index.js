import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './write.less';

class Write extends Component{

  render(){//登陆鉴权
    const {loginStatus}  = this.props;
    if(loginStatus){
      return <div className='container'>
      </div>
    }else{
      return <Redirect to='/login'/>
    }
  }
}

const mapState = (state)=>({
  loginStatus: state.get('LoginReducer').get('loginStatus'),
})

const mapDispatch = (dispatch)=>{

}

export default connect(mapState,mapDispatch)(Write);