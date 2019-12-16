import React, { Component } from 'react';
import './GoodsList.less'
import {Link} from 'react-router-dom'
//引入图片懒加载插件
import LazyLoad from "react-lazy-load"

class GoodsList extends Component {

  render() {
    const goodsList = this.props.goodsList
    // console.log(goodsList)
    return (
      <div className='goodsList'>
        {
         goodsList? goodsList.map((item)=>{
          return (
            <Link to={`/goods/${item.id}`} key={item.id} className='goodsItem'>
              <div className='goodsItemImg'>
                <LazyLoad>
                  <img src={item.list_pic_url} alt=""/>
                </LazyLoad>             
              </div>
              <div className='goodsItemName'>{item.name}</div>
              <div className='goodsItemPrice'>￥{item.retail_price}元</div>
            </Link>
          )
        }):null
        }
      </div>
    );
  }
}

export default GoodsList;