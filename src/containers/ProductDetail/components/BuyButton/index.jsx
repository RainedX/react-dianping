import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import './style.css';

class BuyButton extends Component {
  render() {
    const { productId } = this.props;
    return (
      <Link to={`/puchase/${productId}`} className="buyButton">
        立即购买
      </Link>
    )
  }
}

export default BuyButton;
