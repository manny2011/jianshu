import React, { Component } from "react";
import './DownloadLink.less';

export default class DownloadLink extends Component {

  render() {
    return <a className='link-container'>
      <a href='./'><img className='link-img' src='//cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png' alt="" /></a>
      <div className='link-des-container'>
        <div className='link-des-top-text'>
          <span>下载简书手机App</span>
        </div>
        <span className='link-des-bottom-text'>随时随地发现和创作内容</span>
      </div>
    </a>
  }
}