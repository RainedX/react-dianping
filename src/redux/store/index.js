import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../modules';
import api from '../middleware/api';

let store;
if (process.env.NODE_ENV !== 'production') {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, api)));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk, api));
}

export default store;
