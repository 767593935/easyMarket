import React, { Component } from 'react';
import './RepaceFooter.less'
import { Checkbox, Button } from 'antd-mobile';
// 引入PropTypes
import PropTypes from 'prop-types'
// 引入高阶组件
import { connect } from 'react-redux'
// 引入action
import { asyncDelete ,syncUpdate} from '../../redux/action-creators'
// 引入PubSub
import PubSub from 'pubsub-js'
import ajax from '../../api/index'
const CheckboxItem = Checkbox.CheckboxItem;
@connect(
  (state) => ({ getData: state.getData }),
  {asyncDelete,syncUpdate}
)
class   RepaceFooter extends Component {

  static poropTypes = {
    isShow: PropTypes.bool.isRequired,
    switch: PropTypes.func.isRequired
  }
  state = {
    number: 0,
    arr2:[],
    isShow:false,
    isChecked:false
  }
  // 拿RepaceMain的arr1的数据 有问题第一次总是拿不到 怎么删除PubSub
  componentDidMount(){
    var token=PubSub.subscribe('MY TOPIC', (msg,data)=>{
      this.setState({
        arr2:data
      })
      // console.log(this.state.arr2,'11111')
    });
  
    

  }
  componentWillUnmount(){
    PubSub.subscribe('MY TOPIC')
  }
  clickSwitch = () => {
    this.props.switch()
  }
  deleteData=(productIds)=>{
    this.clickSwitch()
    // console.log(productIds)
    this.props.asyncDelete({productIds:productIds.toString()} )
  }
  a=()=>{
    console.log(111)
    this.setState({
      isShow:!this.state.isShow,
      isChecked:!this.state.isChecked

    })
    const {isChecked}=this.state
    console.log(isChecked)
    this.props.syncUpdate({isChecked})
  }
  render () {
    // 解构redux传过来的值
    const { getData } = this.props
    const { cartTotal,cartList } = getData
    console.log(cartTotal)
    const {arr2,isShow} = this.state
    
    
    
    return (


      <div className="footer">
        {/* 底部点击按钮 */}
        <CheckboxItem className="footer-checkout" checked={(arr2.length===cartList.length&&arr2.length!==0)||isShow} onChange={this.a} >
          {/* 底部内容 */}
          <ul className="footer-content">
            {/* 个数和总价 */}
            <li className="footer-money" >
              <p >已选({arr2.length})</p>
            </li>
            {/* 编辑 */}
            <li>
              <span onClick={this.clickSwitch} >完成</span>
            </li>
            {/* 下单按钮 */}
            <li>
              <Button type="warning" className='footer-btn' onClick={()=>{this.deleteData(arr2)}} >删除所选</Button>
            </li>
          </ul>
        </CheckboxItem>
      </div>



    );
  }
}

export default RepaceFooter;