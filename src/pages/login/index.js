import React, { Component } from 'react';
import { LoginBox, LoginWrapper, Account, PWD, SubmitButton } from './styles';
import { connect } from 'react-redux';
import { actionCreators } from '../login/store/index';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  componentDidMount() {

  }

  render() {
    return this.props.loginStatus ?
      <Redirect push to='/'/>
      :
      <LoginBox>
        <LoginWrapper>
          <Account placeholder='手机号或邮箱' type='text' ref={(input) => { this.account = input }}></Account>
          <PWD placeholder='密码' type='password' ref={(input) => { this.password = input }}></PWD>
          <SubmitButton onClick={() => this.props.login(this.account, this.password)}>登陆</SubmitButton>
        </LoginWrapper>
      </LoginBox>
  }
}

const mapState2Props = (state) => {
  return ({
    loginStatus: state.getIn(['LoginReducer', 'loginStatus']),
  })
}

const mapDispatch2Props = (dispatch) => ({//react 16以上，innerRef deprecated,use ref instead!
  login(accountElem, pwdElem) {
    let account = accountElem.value;
    let pwd = pwdElem.value;
    dispatch(actionCreators.Login(account, pwd));
  }
})

export default connect(mapState2Props, mapDispatch2Props)(Login);