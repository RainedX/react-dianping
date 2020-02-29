import { combineReducers } from 'redux';
import products from './products';
import orders from  './orders';
import shops from './shops';
import comments from './comments';

// 合并领域状态
const rootReducer = combineReducers({
  products,
  shops,
  orders,
  comments
})

export default rootReducer;