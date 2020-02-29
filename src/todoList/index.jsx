import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './store/reducer';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export class TodoListApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <AddTodo />
        <TodoList />
      </Provider>
    );
  }
}

export default TodoListApp;
