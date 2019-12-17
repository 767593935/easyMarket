import React, { Component } from 'react';
import './ShoppingsCard.less';
// 引入头部
import ShopHead from '../../components/ShopHead/ShopHead';
// 引入主题
import ShopMain from '../../components/ShopMain/ShopMain'
// 引入替换主题
import RepaceMain from '../../components/RepaceMain/RepaceMain'
// 引入底部
import ShopFooter from '../../components/ShopFooter/ShopFooter'
// 引入替换底部
import RepaceFooter from '../../components/RepaceFooter/RepaceFooter'
import ajax from "../../api/index"




class ShoppingsCard extends Component {

  state={
    isShow:true
  }
  async componentDidMount(){
    const result2=await ajax.postLogin({
      mobile:15323807318,
      password:123456
      
    })
    console.log(result2)
  }
  switch=()=>{
    const {isShow} = this.state
    
    this.setState({
      isShow:!isShow
    })
  }


  render () {
    const {isShow} = this.state
    return (
      <div className='shopCar' >
        {/* 头部 */}
        <ShopHead/>
        {/* 主题 */}
        {/* <RepaceMain/> */}
        {isShow?<ShopMain/>:<RepaceMain/>}
        {/* 底部 */}
        {isShow?<ShopFooter isShow={isShow} switch={this.switch} />:<RepaceFooter isShow={isShow} switch={this.switch} />}
      </div>  
    );
  }
}

export default ShoppingsCard;