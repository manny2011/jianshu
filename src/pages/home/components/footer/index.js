import React, { Component } from 'react';
import './footer.less';

export default class Footer extends Component {

  render() {
    return (<div className='footer-container'>
      <a>关于简书</a>
      <em> · </em>
      <a>联系我们</a>
      <em> · </em>
      <a>加入我们</a>
      <em> · </em>
      <a>简书出版</a>
      <em> · </em>
      <a>品牌与徽标</a>
      <em> · </em>
      <a>帮助中心</a>
      <em> · </em>
      <a>合作伙伴</a>
      <div className='footer-bottom'>
        ©2012-2020 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252">
          <img src="//cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png" alt="Smrz" />
        </a>
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252">沪公网安备31010402002252号 / </a>
        <a target="_blank" href="https://www.12377.cn/">
          <img src="//cdn2.jianshu.io/assets/web/wxb-e6e244a25f15a58bc91ceb4ea6d0e70a.png" alt="Wxb" />
        </a>
        <a target="_blank" href="http://www.shjbzx.cn/">
          <img src="//cdn2.jianshu.io/assets/web/weifa-57fe174be588966e9ae70967539666e3.jpg" alt="Weifa" />
        </a>
        简书网举报电话：021-34770013 /
      </div>
    </div>)
  }
}