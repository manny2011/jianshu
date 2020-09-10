import React, { Component } from 'react';
import { ListWrapper, ListInfo, LoadMoreFooter } from '../styles';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends Component {
  render() {
    const { articleData, getHomeData } = this.props;
    return (
      <>
        {//叕是这个问题：JSX中写表达式/代码必须在{}中进行
          articleData.map((item, index) => {
            return <Link key={index} to={'/detail/'+item.id} >{/* /detail?id= */}
              <ListWrapper>  
                <img className="pic" src="https://upload-images.jianshu.io/upload_images/16647262-14c9edac4245aefe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="" />
                <ListInfo>
                  <h3 className="title">撒贝宁说：我对自己的婚姻非常失望</h3>
                  <p className="desc">
                    在参加一档节目中,谈到婚姻，撒贝宁公开说道：“我觉得自己的婚姻非常的无望，也没有继续维持下去的必要。”惹得现场观众大吃一惊。 事实上当时马东故意...
                </p>

                </ListInfo>
              </ListWrapper>
            </Link>
          })
        }
        <LoadMoreFooter onClick={() => { getHomeData(this.props.page) }}>加载更多</LoadMoreFooter>
      </>
    );
  }
}

const mapState2Props = (state) => {//再次明确：此处获取到的state是总的state对象,最大的那个！
  return ({
    // articleData: state.get('HomeReducer').get('articleData').toJS(),
    articleData: state.getIn(['HomeReducer', 'articleData']).toJS(),
    page: state.getIn(['HomeReducer', 'page']),
  });
}

const mapDispatch2Props = (dispatch) => {
  return ({
    getHomeData(page) {
      const action = actionCreators.getHomeData(page);
      dispatch(action);
    }
  });
}

export default connect(mapState2Props, mapDispatch2Props)(List);