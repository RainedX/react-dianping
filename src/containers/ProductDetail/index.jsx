import React, { Component } from 'react';
import ProductOverview from './components/ProductOverview';
import ShopInfo from './components/ShopInfo';
import Detail from './components/Detail';
import Remark from './components/Remark';
import BuyButton from './components/BuyButton';
import Header from '../../components/Header';

class ProductDetail extends Component {
  handleBack = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <div>
        <Header title="团购详情" grey onBack={this.handleBack}/>
        <ProductOverview />
        <ShopInfo />
        <Detail />
        <Remark />
        <BuyButton />
      </div>
    );
  }
}

export default ProductDetail;
