import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Discount extends Component {
  render() {
    const data = [
      {
        "id": "p-100",
        "shopIds": ["s-100"],
        "shop": "泫舞舞蹈俱乐部",
        "tag": "免预约",
        "product": "泫舞舞蹈俱乐部",
        "currentPrice": 1,
        "oldPrice": 400,
        "picture": "https://p1.meituan.net/dpdeal/a8eb71748e1f4df175668368e98bb4f868511.jpg.webp@120w_90h_1e_1c_1l|watermark=1&&r=1&p=9&x=20&y=20"
      },
      {
        "id": "p-101",
        "shopIds": ["s-101"],
        "shop": "忍·寿司",
        "tag": "免预约",
        "product": "忍·寿司",
        "currentPrice": 1,
        "oldPrice": 2,
        "picture": "https://p0.meituan.net/deal/2540cbdfbab2b413491101cee34bbb7a51839.jpg.webp@120w_90h_1e_1c_1l|watermark=1&&r=1&p=9&x=20&y=20"
      },
      {
        "id": "p-102",
        "shopIds": ["s-102"],
        "shop": "关忠动物医院",
        "tag": "免预约",
        "product": "关忠动物医院",
        "currentPrice": 1,
        "oldPrice": 349,
        "picture": "https://p1.meituan.net/dpdeal/ef9356fa57c8382bfae0787101a69d2e164461.jpg.webp@120w_90h_1e_1c_1l|watermark=1&&r=1&p=9&x=20&y=20"
      }
    ]
    return (
      <div className="discount">
        <Link to='#' className="discount__header">
          <span className="discount__title">超值特惠</span>
          <span className="discount__more">更多优惠</span>
          <span className="discount__arrow" />
        </Link>
        <div className="discount__content">
          {data.map((item, index) => {
            return (
              <Link
                key={item.id}
                to={`/detail/${item.id}`}
                className="discount__item"
              >
                <div className="discount__itemPic">
                  <img alt="" width="100%" height="100%" src={item.picture} />
                </div>
                <div className="discount__itemTitle">{item.shop}</div>
                <div className="discount__itemPriceWrapper">
                  <ins className="discount__itemCurrentPrice">
                    {item.currentPrice}
                  </ins>
                  <del className="discount__itemOldPrice">{item.oldPrice}</del>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Discount;
