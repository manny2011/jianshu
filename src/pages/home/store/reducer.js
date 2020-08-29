import { constants } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({//immutable会把js对象以及其内层的各个js对象变成immutable对象
  topicData:[
    {
      id:1,
      imgUrl:'https://pic1.zhimg.com/da8e974dc_is.jpg',
      title:'专题介绍1',
    },
    {
      id:2,
      imgUrl:'https://pic1.zhimg.com/da8e974dc_is.jpg',
      title:'专题介绍2',
    },
  ]
});
const reducer = (state = defaultState, action) => {//统一把更新state的数据在reducer中转换成immutable对象后再更新state
  console.log(action);
  switch (action.type) {
    
    default:
      return state;
  }
}

export { reducer };