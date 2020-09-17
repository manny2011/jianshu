import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
  loginStatus:true,
})

const reducer = (state = defaultState, action) => {//state如果为空，就使用默认值
  switch (action.type) {
    case constants.UPDATE_LOGIN_STATUS:
      return state.merge({
        loginStatus:action.loginStatus,
      });
    default:
      return defaultState;
  }
}

export default reducer;