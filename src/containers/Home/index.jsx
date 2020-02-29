import React, { Component } from 'react';
import store from '../../redux/store';
import { actions } from "../../redux/modules/home";

class Home extends Component {
  componentDidMount() {
    store.dispatch(actions.loadLikes());
  }
  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}
export default Home;