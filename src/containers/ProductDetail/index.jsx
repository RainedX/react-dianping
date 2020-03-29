import React, { Component } from 'react';
import ProductOverview from './components/ProductOverview';
import ShopInfo from './components/ShopInfo';
import Detail from './components/Detail';
import Remark from './components/Remark';
import BuyButton from './components/BuyButton';
import Header from '../../components/Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  actions as detailActions,
  getProduct,
  getRelatedShop
} from 'src/redux/modules/detail';
class ProductDetail extends Component {
  componentDidMount() {
    const { product } = this.props;
    if (!product) {
      const productId = this.props.match.params.id;
      //不使用bindActionCreators时，this.props.loadProductDetail(productId);
      this.props.detailActions.loadProductDetail(productId);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //第一次获取到产品详情时，需要继续获取关联的店铺信息
    if (!prevProps.product && this.props.product) {
      this.props.detailActions.loadShopById(this.props.product.nearestShop);
    }
  }

  handleBack = () => {
    this.props.history.goBack();
  };
  render() {
    const { product, relatedShop } = this.props;
    return (
      <div>
        <Header title="团购详情" grey onBack={this.handleBack} />
        {product && <ProductOverview data={product} />}
        {relatedShop && (
          <ShopInfo data={relatedShop} totals={product.shopIds.length} />
        )}
        {product && (
          <div>
            <Detail data={product} />
            <Remark data={product} />
            <BuyButton productId={product.id} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const productId = props.match.params.id;
  return {
    product: getProduct(state, productId),
    relatedShop: getRelatedShop(state, productId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // 不使用bindActionCreators时loadProductDetail: productId => dispatch(detailActions.loadProductDetail(productId))
    detailActions: bindActionCreators(detailActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
