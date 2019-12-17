import React, { Component } from 'react';
// 引入样式
import './RepaceMain.less'
// 引入高阶组件connect
import { connect } from 'react-redux'
// 引入Redux-action
import { asyncGetData,syncUpdate } from '../../redux/action-creators'
// 引入组件
import { Checkbox, List, Stepper } from 'antd-mobile';
// 引入PubSub
import PubSub from 'pubsub-js'
// antd组件
const CheckboxItem = Checkbox.CheckboxItem;


// 高阶组件
@connect(
  (state) => ({ getData: state.getData,change:state.change }),
  { asyncGetData , syncUpdate}
)
class RepaceMain extends Component {
  componentDidMount () {
    const { cartList } = this.props.getData
    
    this.props.syncUpdate(cartList);
  }
  state = {
    val: 0,
    arr1:[],
    // isChecked:this.props.change
  };
  // 点击事件 给cartList添加a属性 把cartList的product_id添加到arr1中
  clickChange=(item)=>{
    
    const {arr1} = this.state
    item.checked = false
    item.checked=!item.checked
    
    
    // this.setState({
    //   q1:!q1
    // })
    if (item.a===1) {
      item.a=0
      
      const index = arr1.indexOf(item.product_id)
      if (index!==-1) {
        arr1.splice(index,1)
        // console.log(arr1)
        // q1=arr1.indexOf(item.product_id)!==-1
        // console.log(q1,'-----------------')
        PubSub.publishSync('MY TOPIC', arr1);
        return arr1
      }
    }else{
      item.a=1
      
      arr1.push(item.product_id)
      // console.log(arr1)
      // q1=arr1.indexOf(item.product_id)!==-1
      // console.log(q1,'==================')
      PubSub.publishSync('MY TOPIC', arr1);
      return arr1
    }
    
  }
  // 步进器事件
  // onChange = (item) => {
  //   // console.log(val);
  //   this.setState({ item.number });
  // }

  render () {
    const { cartList,data } = this.props.getData
    let arr=data?data:cartList;
    // console.log('1111',data)
    const {arr1} = this.state
    
    return (
      <ul className="main">
        {/* 购物车每一项 */}
        {
          cartList.map((item, index) => {
            
            
            return (
              <li key={index} >
                {/* 按钮 */}
                <CheckboxItem className="CheckboxItem"   onChange={()=>{this.clickChange(item)}}  >
                  {/* 物品图片 */}
                  <img src={item.list_pic_url} alt="##" />
                  {/* 物品详情 */}
                  <div className="detail" id="detail" >
                    {/* 物品价值和介绍 */}
                    <div className="value" >
                      <div className="value-item">
                        <p>已选择:</p>
                        <p className="money" > ￥{item.market_price}</p>
                      </div>
                      {/* <List.Item
                        wrap
                        extra={
                          <Stepper
                            style={{ width: '50%', minWidth: '80px' }}
                            showNumber
                            max={100}
                            min={1}
                            value={item.number}
                            onChange={this.onChange}
                          />}
                      >
                      </List.Item> */}
                    </div>


                  </div>
                </CheckboxItem>
              </li>

            )
          })
        }




      </ul>
    );
  }
}

export default RepaceMain;