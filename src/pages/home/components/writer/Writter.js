import React, { Component } from 'react';
import WriterSection from './writerSection';
import { connect } from 'react-redux';

class Writter extends Component {
  render() {
    return (
      <div>
        {
          this.props.writerData.map((item,index)=>{
            return <WriterSection key={item.id} item = {item}/>
          }) 
        }
        <a style={{display:"block",width:'100%',backgroundColor:'#f7f7f7',border:'1px solid #dcdcdc',borderRadius:'4px',padding:'7px 7px 7px 12px',cursor:'pointer',textAlign:'center',boxSizing:'border-box'}}>
          查看更多
        </a>
      </div>
    );
  }
}

export default connect(state => ({
  writerData:state.getIn(['HomeReducer','writerData']).toJS(),
}), (dispatch) => ({

}))(Writter)