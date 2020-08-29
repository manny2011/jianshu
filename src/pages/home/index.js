import React, { Component } from 'react';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './styles';
import List from './components/List';
import Writter from './components/Writter';
import Topic from './components/Topic';
import Recommend from './components/Recommend';

class Home extends Component {
  render() {
    return <HomeWrapper>
      <HomeLeft >
        <img className="banner-img" src="https://pic3.zhimg.com/v2-64a76467d87bc7b3089d2b3e2635504a_540x450.jpeg" />
        <Topic />
        <List />
      </HomeLeft>
      <HomeRight >
        <Recommend />
        <Writter />
      </HomeRight>
    </HomeWrapper>
  }
}

export default Home;