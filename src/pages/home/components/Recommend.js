import React , {Component} from 'react';
import { RecommendWrapper ,RecommendItem } from "../styles";
import {connect} from 'react-redux';
class Recommend extends Component{
  render(){
    return (
      <RecommendWrapper>
        {/* <img className = "img" src="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt="Banner s club"></img>
        <img src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt="Banner s 7"/>
        <img src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt="Banner s 5"/>
        <img src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt="Banner s 6"/> */}
        {
          this.props.recommendData.map((item)=>{
            return <RecommendItem imgUrl={item.imgUrl} key={item.id}/>
          })
        }
      </RecommendWrapper>
    );
  }
}
const mapState2Props = (state)=>{
  return ({
    recommendData:state.get('HomeReducer').get('recommendData').toJS(),//
  });
}

export default connect(mapState2Props,null)(Recommend);