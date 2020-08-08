import React, { Component } from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoList,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
} from './styles';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';

class Header extends Component {
  //react中的条件渲染控制
  getSearchInfo = () => {
    const { ifMouseIn, focused, data, page, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    if(data.length ===0) return null;//这时就不会报下面的key值重复，是因为最开始没数据时，key都为undefined
    if (focused || ifMouseIn) {
      const infoList = [];
      for (let i = 6 * page; i < 6 * (page + 1); i++) {
        infoList.push(<SearchInfoItem key={data[i]}>{data[i]}</SearchInfoItem>)
      } 
      return (<SearchInfo
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <SearchInfoTitle>热门搜索</SearchInfoTitle>
        <SearchInfoSwitch onClick={handleChangePage}>换一批</SearchInfoSwitch>
        <SearchInfoList>
          {
            infoList
            // data.map((item) => {//此处的data可是个immutable对象
            // return (<SearchInfoItem key={item}>{item}</SearchInfoItem>);//JSX里面使用变量/代码，必须要写在{}中
            // })
          }
        </SearchInfoList>
      </SearchInfo>);
    } else {
      return null;
    }
  }
  render() {
    //结构匹配赋值
    const { focused, handleOnFocused, handleOnBlur } = this.props;
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
              in={focused}
              classNames="slide"
              timeout={300}
            >
              <NavSearch className={focused ? "focused" : ""}
                onFocus={handleOnFocused}
                onBlur={handleOnBlur} />
            </CSSTransition>
            <i className={focused ? "focused iconfont" : "iconfont"}>&#xe60b;</i>
            {this.getSearchInfo()}
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

const mapState2Prop = (state) => {//统一在此把immutable对象转换为普通js对象
  //统一在reducer中把js对象转换成immutable对象
  return {
    focused: state.getIn(['HeaderReducer', 'focused']),
    data: state.get('HeaderReducer').get('data').toJS(),
    ifMouseIn: state.get('HeaderReducer').get('ifMouseIn'),
    page: state.get('HeaderReducer').get('page'),
    // focused: state.get('HeaderReducer').get('focused'),
  }
}
const mapDispatch2Prop = (dispatch) => {
  return {
    handleOnFocused() {
      dispatch(actionCreators.searchFocus());
      dispatch(actionCreators.getSearchList())
    },
    handleOnBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage() {
      dispatch(actionCreators.handleChangePage());
    }
  }
}
export default connect(mapState2Prop, mapDispatch2Prop)(Header);