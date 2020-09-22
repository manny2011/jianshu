import React, { Component } from 'react';
import './writer.less';

export default class WriterSection extends Component {

  render() {
    return (<div className='section_container'>
      <img className='section_img' src='https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'/>
      <div className='section_text_container'>
        <span className='section_text_container_top_text'>
          卢璐说
        </span>
        <span className='section_text_container_bottom_text'>
          写了1752.3k字 · 33.1k喜欢
        </span>
      </div>
      <span class='section_follow'>关注</span>
    </div>)
  }
}
