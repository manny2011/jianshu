import Loadable from 'react-loadable';
import React from 'react';

export default Loadable({
  loader:()=>import('./index'),
  loading:()=>{
    return <div>正在加载中</div>
  }
})
