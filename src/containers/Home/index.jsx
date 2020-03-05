import React, { Component } from 'react';
import store from '../../redux/store';
import { actions } from "../../redux/modules/home";
import Category from './components/Category';
import HeadLine from "./components/HeadLine";
import Discount from "./components/Discount";
// import LikeList from "./components/LikeList";
class Home extends Component {
  componentDidMount() {
    store.dispatch(actions.loadLikes());
  }
  render() {
    const { discounts } = this.props;
    return (
      <div>
        <Category />
        <HeadLine />
        <Discount data={discounts}/>
      </div>
    )
  }
}
export default Home;