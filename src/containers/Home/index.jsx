import React, { Component } from 'react';
import store from '../../redux/store';
import { actions } from "../../redux/modules/home";
import Category from './components/Category';
import HomeHeader from "./components/HomeHeader";
import HeadLine from "./components/HeadLine";
import Discount from "./components/Discount";
import LikeList from "./components/LikeList";
import Banner from "../../components/Banner";
import Activity from "./components/Activity";
import Footer from "../../components/Footer";
class Home extends Component {
  componentDidMount() {
    store.dispatch(actions.loadLikes());
  }
  render() {
    const { discounts } = this.props;
    return (
      <div>
        <HomeHeader />
        <Banner />
        <Category />
        <HeadLine />
        <Activity />
        <Discount data={discounts}/>
        <LikeList />
        <Footer />
      </div>
    )
  }
}
export default Home;