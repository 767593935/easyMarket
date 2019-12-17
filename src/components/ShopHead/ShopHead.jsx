import React, { Component } from 'react';
import './ShopHead.less'
class ShopHead extends Component {
  render() {
    return (
      <ul className='header'>
          <li>
            <span className="iconfont icon-wujiaoxing1"></span>
            <span>"30天无忧退货"</span>
          </li>
          <li>
            <span className="iconfont icon-wujiaoxing1"></span>
            <span>"48小时快速退款"</span>
          </li>
          <li>
            <span className="iconfont icon-wujiaoxing1"></span>
            <span>"满88元免邮费"</span>
          </li>
        </ul>
    );
  }
}

export default ShopHead;