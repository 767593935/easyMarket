import React, { Component } from 'react';
import './ShopFooter.less'
import { Checkbox, Button } from 'antd-mobile';
// 引入PropTypes
import PropTypes from 'prop-types'
// 引入高阶组件
import { connect } from 'react-redux'
// 引入action方法
import { asyncCheck } from '../../redux/action-creators'
const CheckboxItem = Checkbox.CheckboxItem;
@connect(
  (state) => ({ getData: state.getData }),
  { asyncCheck }
)
class ShopFooter extends Component {

  static poropTypes = {
    isShow: PropTypes.bool.isRequired,
    switch: PropTypes.func.isRequired
  }
  state = {

    a1: false
  }

  clickSwitch = () => {
    this.props.switch()
  }
  // 点击全部选中或者全部清空
  onChange = () => {
    console.log(111)
    // const {a1} = this.state
    // this.setState({
    //   a1:!a1
    // })
    // this.props.getData.cartList.map((item)=>{
    //   let isChecked=1
    //   if(item.checked===0){
    //     isChecked=1
    //   }else{
    //     isChecked=0
    //   }
    //   const productIds = item.product_id
    //   this.props.asyncCheck({isChecked, productIds})
    // })

    const { cartList } = this.props.getData
    const arr = []
    cartList.forEach((item, index) => {
      return arr.push(item.checked)
    })
    const isTrue = arr.every((item) => {
      return item === 1
    })
    let isChecked = isTrue?0:1
    
    console.log(isTrue)
    cartList.map((item) => {

      const productIds = item.product_id
      this.props.asyncCheck({ isChecked, productIds })
    })
  }
  render () {
    // 解构redux传过来的值
    const { getData } = this.props
    const { cartTotal } = getData
    console.log(cartTotal)
    // 控制底部复选框的状态---使用之后不能点击
    let { a1 } = this.state
    if (this.props.getData.cartTotal.goodsCount === this.props.getData.cartTotal.checkedGoodsCount&&this.props.getData.cartTotal.checkedGoodsCount!==0) {
      a1 = true
    } else {
      a1 = false
    }

    return (


      <div className="footer">
        {/* 底部点击按钮 */}
        <CheckboxItem className="footer-checkout" checked={a1} onChange={this.onChange} >
          {/* 底部内容 */}
          <ul className="footer-content">
            {/* 个数和总价 */}
            <li className="footer-money" >
              <p>已选({cartTotal.checkedGoodsCount})￥{cartTotal.checkedGoodsAmount}</p>
            </li>
            {/* 编辑 */}
            <li>
              <span onClick={this.clickSwitch} >编辑</span>
            </li>
            {/* 下单按钮 */}
            <li>
              <Button type="warning" className='footer-btn' onClick={this.clickSwitch} >下单</Button>
            </li>
          </ul>
        </CheckboxItem>
      </div>



    );
  }
}

export default ShopFooter;