import React, { Component } from 'react';
import './ShopMain.less'
import { Checkbox } from 'antd-mobile';
import { asyncGetData, asyncCheck } from '../../redux/action-creators'
// 引入connect
import { connect } from 'react-redux'
const CheckboxItem = Checkbox.CheckboxItem;
@connect(
  (state) => ({ getData: state.getData }),
  { asyncGetData, asyncCheck }
)
class ShopMain extends Component {
  componentDidMount () {
    this.props.asyncGetData()
  }
  // antd 复选框自带事件  点击选中重新计算ShopFopter组件中的选中个数和总价
  changeTotal = (Checked, productIds) => {
    // console.log(checked,productIds);
    // console.log(Checked, productIds)
    var isChecked = 1
    if(Checked===1){
      isChecked=0
    }
    this.props.asyncCheck( {isChecked, productIds} )
  }

  render () {
    const { cartList } = this.props.getData
    console.log(cartList)
    return (
      <ul className="main">
        {
          // cartList?
            
              cartList.map((item, index) => {
                const a = item.checked ? true : false
                return (
                  <li key={index} >
                    {/* 按钮 */}
                    <CheckboxItem className="CheckboxItem" checked={a} onChange={() => this.changeTotal(item.checked,  item.product_id)} >
                      {/* 物品图片 */}
                      <img src={item.list_pic_url} alt="##" />
                      {/* 物品详情 */}
                      <div className="detail" id="detail" >
                        {/* 物品价值和介绍 */}
                        <div className="value" >
                          <p>{item.goods_name}</p>
                          <p className="money" > ￥{item.market_price}</p>
                        </div>
                        {/* 数量 */}
                        <p>X{item.number}</p>
    
                      </div>
                    </CheckboxItem>
                  </li>
                )
              })
            

            
              
          // :""
        }
      </ul>

   )
 }
}

export default ShopMain;