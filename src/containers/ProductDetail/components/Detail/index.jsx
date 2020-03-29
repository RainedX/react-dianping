import React, { Component } from 'react'
import './style.css'
class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        "id": "p-1",
        "shopIds": ["s-10", "s-11", "s-12"],
        "nearestShop": "s-10",
        "shop": "院落创意菜",
        "tag": "免预约",
        "picture": "https://p0.meituan.net/deal/e6864ed9ce87966af11d922d5ef7350532676.jpg@450w_280h_1e_1c_1l|watermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20",
        "product": "「3店通用」百香果（冷饮）1扎",
        "description": "仅售19.9元！价值48元的百香果（冷饮）1扎，提供免费WiFi。",
        "currentPrice": 19.9,
        "oldPrice": 48,
        "saleDesc": "已售6034",
        "detail": {
          "category": "红果酪",
          "products": [
            { "name": "百果香（冷饮）", "quantity": "1扎", "price": "48元" }
          ],
          "remark": "免费提供餐巾纸"
        },
        "validityPeriod": "2018-10-20至2019-09-15",
        "purchaseNotes": [
          { "title": "除外日期", "content": "有效期内周末、法定节假日可用" },
          { "title": "使用时间", "content": "团购券使用时间：11:00-22:00" },
          { "title": "预约提醒", "content": "无需预约，消费高峰时可能需要等位" },
          { "title": "规则提醒", "content": "每张团购券建议2人使用" },
          { "title": "包间", "content": "可用包间，条件为：详询商户" },
          {
            "title": "堂食外带",
            "content": "仅限堂食，不提供餐前外带，餐毕未吃完可打包，打包费详情咨询商家"
          },
          { "title": "商家服务", "content": "提供免费WiFi" }
        ]
      }
      
    }
  }
  render() {
    const {
      detail: { category, products, remark },
      currentPrice,
      oldPrice
    } = this.state.data; 
    return (
      <div className="detail">
        <div className="detail__header">
          <span>团购详情</span>
          <i className="detail__headerIcon" />
        </div>
        <table className="detail__table" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr className="detail__row">
              <th colSpan="3" className="detail__category">
                {category}
              </th>
            </tr>
            {products.map((item, index) => {
              return (
                <tr key={index} className="detail__row">
                  <td>{item.name}</td>
                  <td className="detail__td--alignRight">{item.quantity}</td>
                  <td className="detail__td--alignRight">{item.price}</td>
                </tr>
              );
            })}

            <tr className="detail__row">
              <td />
              <td className="detail__td--price">
                最高价值
                <br />
                <strong className="detail__td--priceNew">团购价</strong>
              </td>
              <td className="detail__td--price">
                {oldPrice}元
                <br />
                <strong className="detail__td--priceNew">
                  {currentPrice}元
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="detail__remark">免费提供餐巾纸</div>
        <div className="detail__more">
          <span>{remark}</span>
          <span className="detail__notice">（建议WIFI下打开，土豪请随意）</span>
          <i className="detail__arrow" />
        </div>
      </div>
    );
  }
}

export default Detail