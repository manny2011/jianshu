import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({//immutable会把js对象以及其内层的各个js对象变成immutable对象
  topicData: [],
  articleData: [],
  recommendData: [],
  page: 0,
});
const reducer = (state = defaultState, action) => {//统一把更新state的数据在reducer中转换成immutable对象后再更新state
  console.log(action);
  switch (action.type) {
    case constants.HOME_DATA:
      console.log(action);
      return state.merge({//此处必须把plain js obj转换成immutable obj.
        topicData: fromJS(action.topicData),
        articleData:fromJS(state.get('articleData').toJS().concat(action.articleData)),
        recommendData:fromJS(action.recommendData),
        page:fromJS(state.get('page') + 1),//int 类型的变量不需要toJS()!
      });
    default:
      return state;
  }
}

export { reducer };