import React, { Component } from 'react';
import { DetailWrapper, Header, Content, Author, AuthorTextWrapper } from './styles';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';
import { useParams } from 'react-router-dom';

class Detail extends Component {

  componentDidMount() {//使用hooks：useParams改写,but got this ERROR:hooks can only be called inside the body A function Component!
    const id = this.props.match.params.id;
    // const {id} = useParams();
    console.log("id= "+id);
    console.log(this.props);
    this.props.getDetailData(id);
  }

  render() {
    return <DetailWrapper>
      <Header>{this.props.title}</Header>
      <Author>
        <a href=''><img class="_13D2Eh" alt='thumnail' src="https://upload.jianshu.io/users/upload_avatars/20408088/1e2dc979-b72d-43fd-9370-6720b2f4c236.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" /></a>
        <AuthorTextWrapper>
          <div>柠檬精的故事会</div>
          <div>2020.06.04 16:57:21字数 683</div>
        </AuthorTextWrapper>
      </Author>
      <Content dangerouslySetInnerHTML={{ __html: this.props.content }}>
      </Content>
    </DetailWrapper>
  }
}

const mapState2Props = (state) => {
  return ({
    title: state.getIn(['DetailReducer', 'title']),
    content: state.getIn(['DetailReducer', 'content']),
  })
}

const mapDispatch2Props = (dispatch) => ({
  getDetailData(id) {
    dispatch(actionCreators.getDetailData(id))
  }
})

export default connect(mapState2Props, mapDispatch2Props)(Detail);

