import React, { Component } from 'react';
import './BrandDetail.less'
//引入高阶组件
import {connect} from 'react-redux'
//引入异步的creator函数
import {getBrandDetailAsync} from '@actions/index.js'
//引入GoodsList组件
import GoodsList from '../../components/GoodsList/GoodsList.jsx'
//引入接口
import Http from '../../api/index'

@connect(
  (state)=>({brandDetails:state.brandDetails}),
  {getBrandDetailAsync}
)
class BrandDetail extends Component {
  state={
    goodsList:[] //制造商商品随便数据
  }
  //返回时间
  goback = () => {
    this.props.history.goBack()
  }

  //页面将要渲染
  componentWillMount(){
    const { match: { params: { id } },getBrandDetailAsync} = this.props
    // console.log(id)
    getBrandDetailAsync({id:id})
    // if(brand){
    //   if(Object.keys(brand).length!==0){
    //     console.log(brand)
    //   }
    // }
    // getBrandGoodsAsync({id:id,page:1,size:1000})
    
  }

  //界面渲染完毕后
  async componentDidMount(){
    // const result = await Http.getBrandDetail({
    //   id:1026000
    // })
    // if(Object.keys(result.brand).length!==0){
    //   console.log(result.brand)
    // }
    // const {getBrandGoodsAsync} = this.props
    // const result2 = await getBrandGoodsAsync({
    //   id:1026000,
    //   page:1,
    //   size:1000
    // })
    // console.log(result2)
    // const { match: { params: { id } },getBrandDetailAsync} = this.props
    //   getBrandDetailAsync({id:id})
    // const {brand} = result
    // if(brand){
    //   console.log(brand)
    // }
   const result = await Http.getHomeData()
   this.setState({
    goodsList:result.categoryList[0].goodsList
   })
  //  console.log(result.categoryList[0].goodsList)
    
  }
  componentWillReceiveProps(nextProps){
    
  }
  render () {
    const {goodsList} = this.state
    // console.log(dataArr)
    const {brandDetails} = this.props
    // console.log(this.props.state)
    return (
      brandDetails?<div>
      <div className='title' onClick={this.goback}>
        <i className='iconfont icon-xiangzuo'></i>
        <span>{brandDetails.name}</span>
      </div>
      <img src={brandDetails.list_pic_url} alt="" />
      <div className='breadDesc'>
        {brandDetails.simple_desc}
      </div>
      <GoodsList goodsList={goodsList}/>
    </div>:null
   )
  }
}

export default BrandDetail;