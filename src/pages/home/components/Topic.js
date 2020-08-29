import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem,
} from '../styles';

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.topicData.map((item) => {
            return (
              <TopicItem >
                <img className='topic-item-img' src={item.imgUrl} />
                {item.title}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    );
  }
}
                                                                                        //统一在此处把immutable对象转化为JS对象，当然也可以不转，按immutable方法使用
const mapState2Prop = (state) => ({ topicData: state.get('HomeReducer').get('topicData').toJS() })//注意这里必须加小括号，表示返回一个对象，否则会被当作表达式

export default connect(mapState2Prop, null)(Topic);