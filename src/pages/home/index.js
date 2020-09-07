import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './styles';
import List from './components/List';
import Writter from './components/Writter';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import {actionCreators} from './store/index';

class Home extends Component {
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
    </HomeWrapper>
  }

  componentDidMount(){
    const {page} = this.props;
    this.props.getHomeData(page);//发起异步action
  }
}

const mapDispatch2Props = (dispatch)=>{
  return ({
    getHomeData(page){
      const action = actionCreators.getHomeData(page);
      dispatch(action);
    }
  });
}

const mapState2Props = (state) =>({
  page:state.getIn(['HomeReducer','page']),
})

export default connect(mapState2Props,mapDispatch2Props)(Home);




