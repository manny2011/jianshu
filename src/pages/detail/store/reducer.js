import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
  title: '',
  content: '',
})

const reducer = (state = defaultState, action) => {//state如果为空，就使用默认值
  switch (action.type) {
    case constants.DETAIL_DATA:
      return state.merge({
        title:action.title,
        content:action.content,  
      });
    default:
      return defaultState;
  }
}

export default reducer;