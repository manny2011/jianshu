import { combineReducers } from 'redux-immutable';//把最外层的state对象也变成immutable对象
import {reducer as HeaderReducer } from '../common/header/store/index';

const reducers = combineReducers({
  HeaderReducer,

});
export default reducers;