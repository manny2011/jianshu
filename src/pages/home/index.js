import React, { Component,PureComponent } from 'react';
import {connect} from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './styles';
import List from './components/List';
import Writter from './components/writer/Writter';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import {actionCreators} from './store/index';
import { Back2Top } from './styles';
 
class Home extends PureComponent {//虚拟dom的比对 shouldComponentUpdate->bool

  Back2Top(){
    window.scrollTo(0,0);
  }

  render() {
    return <HomeWrapper>
      <HomeLeft >
        <img className="banner-img" src="https://pic3.zhimg.com/v2-64a76467d87bc7b3089d2b3e2635504a_540x450.jpeg" alt=""/>
        <Topic />
        <List />
      </HomeLeft>
      <HomeRight >
        <Recommend />
        <Writter />
      </HomeRight>
      {//三目运算符 的使用
          this.props.ifShowBack2TopBtn ? <Back2Top onClick={this.Back2Top}>回到顶部</Back2Top> : null
      }
      
    </HomeWrapper>
  }

  componentDidMount(){
    const {page} = this.props;
    this.props.getHomeData(page);//发起异步action
    window.addEventListener('scroll',this.props.determinIfShowBack2Top)//改变state的一切方法统一全放在mapDispatch2Props中
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.determinIfShowBack2Top)
  }
}

const mapDispatch2Props = (dispatch)=>{
  return ({
    getHomeData(page){
      const action = actionCreators.getHomeData(page);
      dispatch(action);
    },
    determinIfShowBack2Top(){
      // console.log(document.documentElement.scrollTop);
      dispatch(actionCreators.setIfShowBack2TopBtn(document.documentElement.scrollTop > 300))
    }
  });
}

const mapState2Props = (state) =>({
  page:state.getIn(['HomeReducer','page']),
  ifShowBack2TopBtn:state.getIn(['HomeReducer','ifShowBack2TopBtn']),//注意api getIn(['a','b','c',...])
})

export default connect(mapState2Props,mapDispatch2Props)(Home);




