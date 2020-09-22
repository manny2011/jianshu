import React from 'react';
import Loadable from 'react-loadable';

// const LoadableComponent = Loadable({
//   loader: () => import('./index'),
//   loading: ()=>{//一个接受状态对象的函数
//     return <div>正在加载中</div>
//   },
// });

const LoadableComponent = React.lazy(()=>import('./index'));

export default LoadableComponent

