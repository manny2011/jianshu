import { combineReducers } from 'redux-immutable';//把最外层的state对象也变成immutable对象
import {reducer as HeaderReducer } from '../common/header/store/index';
import { reducer as HomeReducer} from '../pages/home/store/index';
import {reducer as DetailReducer} from '../pages/detail/store/index';

const reducers = combineReducers({
  HeaderReducer,
  HomeReducer,
  DetailReducer
});
export default reducers;