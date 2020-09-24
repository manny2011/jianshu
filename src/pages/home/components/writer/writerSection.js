import React, { Component } from 'react';
import './writer.less';

export default class WriterSection extends Component {

  render() {
    const {item}  = this.props;
    return (<div className='section_container'>
      <img className='section_img' alt='thumnail' src='https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' />
      <div className='section_text_container'>
        <span className='section_text_container_top_text'>
          {item.topTitle}
        </span>
        <span className='section_text_container_bottom_text'>
          {item.bottomTitle}
        </span>
      </div>
      <span className='section_follow'>关注</span>
    </div>)
  }
}
