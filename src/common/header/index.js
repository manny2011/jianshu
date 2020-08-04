import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './styles';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

class Header extends Component {

  render() {
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">Aa</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              classNames="slide"
              timeout={300}
            >
              <NavSearch className={this.props.focused ? "focused" : ""}
                onFocus={this.props.handleOnFocused}
                onBlur={this.props.handleOnBlur} />
            </CSSTransition>
            <i className={this.props.focused ? "focused iconfont" : "iconfont"}>&#xe60b;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe708;</i>
            写文章
            </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapState2Prop = (state) => {
  return {
    focused: state.focused,
  }
}
const mapDispatch2Prop = (dispatch) => {
  return {
    handleOnFocused() {
      const action = {
        type: "search_focus",
      }
      dispatch(action);
    },
    handleOnBlur() {
      const action = {
        type: "search_blur",
      }
      dispatch(action);
    }
  }
}
export default connect(mapState2Prop, mapDispatch2Prop)(Header);