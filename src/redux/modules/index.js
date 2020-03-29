import { combineReducers } from 'redux';
import entities from './entities';
import home from './home';
import detail from './detail';
import app from './app';
/** 
 *                            1.UI状态 例如多选框是否选中，输入框信息等
 *               页面状态 ===>
 *                            2.领域状态 例如商品，店铺，订单，评价信息等
 * 容器组件 ===>
 *               通用前端状态   特殊的UI状态 例如登录状态，全局异常信息              
 */

const rootReducer = combineReducers({
  entities,
  home,
  detail,
  app
});

export default rootReducer;