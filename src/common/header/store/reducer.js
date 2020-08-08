import { constants } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({//immutable会把js对象以及其内层的各个js对象变成immutable对象
  //所以更新内层对象时，传入的也应该是个immutable对象
  focused: false,
  ifMouseIn: false,//鼠标是否在框内
  data: [],
  page: 0,
  totalPage: 0,
});
const reducer = (state = defaultState, action) => {//统一把更新state的数据在reducer中转换成immutable对象后再更新state
  console.log(action);
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true);//总是会返回一个全新的对象，而不是更新内存中已有对象
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.SEARCH_DATA:
      const data = action.data;
      const maxPage = Math.ceil(data.length / 5 - 1);
      // return state.set('data', fromJS(action.data)).set('totalPage', maxPage);//优化写法 使用merge
      return state.merge({//性能比连续调用set更好，避免返回多个immutable对象！
        'data': fromJS(action.data),
        'totalPage': maxPage,
      });
    case constants.MOUSE_ENTER:
      return state.set('ifMouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('ifMouseIn', false);
    case constants.CHANGE_PAGE:
      let page = state.get('page')
      const totalPage = state.get('totalPage')
      if (++page < totalPage)
        return state.set('page', page);
      else
        return state.set('page', 0);
    default:
      return state;
  }
}

export { reducer };