import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { changeInputValue, addTodo } from './store/actions';
import {toJS} from './HOC';

class AddTodo extends Component {
  render() {
    return (
      <div>
        <Input
          value={this.props.inputValue}
          onChange={this.props.handleInputChange}
          style={{ width: '200px', marginRight: '20px' }}
        />
        <Button onClick={this.props.handleClick}>Add</Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  }
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: e => {
      const action = changeInputValue(e.target.value);
      dispatch(action);
    },
    handleClick: () => {
      const action = addTodo();
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(toJS(AddTodo));
