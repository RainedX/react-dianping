import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListData } from './store/actions';

class TodoList extends Component {
  componentDidMount() {
    this.props.initList();
  }
  render() {
    return (
      <ul>
        {this.props.list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  }
};

const mapDispatchToProps = dispatch => {
  return {
    initList: () => {
      dispatch(getListData());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);