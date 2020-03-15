import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Category from './components/Category';
import HomeHeader from "./components/HomeHeader";
import HeadLine from "./components/HeadLine";
import Discount from "./components/Discount";
import LikeList from "./components/LikeList";
import Banner from "../../components/Banner";
import Activity from "./components/Activity";
import Footer from "../../components/Footer";
import {
  actions as homeActions,
  getLikes,
  getDiscounts,
  getPageCountOfLikes
} from "src/redux/modules/home";
class Home extends Component {
  componentDidMount() {
    this.props.homes.loadDiscounts()
  }
  fetchMoreLikes = () => {
    this.props.homes.loadLikes()
  }
  render() {
    const { discounts, likes, pageCount } = this.props;
    return (
      <div>
        <HomeHeader />
        <Banner />
        <Category />
        <HeadLine />
        <Activity />
        <Discount data={discounts}/>
        <LikeList data={likes} pageCount={pageCount} fetchData={this.fetchMoreLikes}/>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, prop) => {
  return {
    likes: getLikes(state),
    discounts: getDiscounts(state),
    pageCount: getPageCountOfLikes(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    homes: bindActionCreators(homeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);