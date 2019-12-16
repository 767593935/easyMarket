import React, { Component } from 'react';
import './Categorys.less'
import { Tabs } from 'antd-mobile';
//引入connect 
import { connect } from 'react-redux'
import { getCategoryNavDataAsync, getCategoriesAsync } from '@actions/index.js'
// import Http from '../../api/index'

//引入Header组件
import Header from '../../components/Header/Header.jsx'
//引入goodsList组件
import GoodsList from '../../components/GoodsList/GoodsList.jsx'

@connect(
  (state) => ({ categoriesNav: state.categoriesNav, goods: state.goods }),
  { getCategoryNavDataAsync, getCategoriesAsync }
)
class Categorys extends Component {

  state = {
    data: [],
    page: 0,
    currentCategoryId: 0
  }

  //向左箭头回退按钮
  goBack = (currentCategoryId) => {
    // console.log(this)
    this.props.history.goBack()
  }

  //界面将要渲染时
  componentWillMount () {
    // console.log(this.props)
    const { match: { params: { id } }, getCategoryNavDataAsync, getCategoriesAsync } = this.props
    this.setState({
      currentCategoryId: id
    })
    getCategoryNavDataAsync({ id: id })
    getCategoriesAsync({ page: 1, size: 1000, categoryId: id })
  }

  //界面渲染加载完毕时
  async componentDidMount () {
    // console.log(this.props)
    //请求分类导航数据
    // if(!this.props.categoriesNav.length){
    //   await this.props.getCategoryNavDataAsync({id:1005000})
    // const result = await Http.getCategoryNavData({
    //   id:1005000
    // })
    //  console.log(result)
  }

  //请求分类数据
  // if(!Object.keys(this.props.goods).length){
  //   await this.props.getCategoriesAsync({id:1005000})
  // }


  // componentWillReceiveProps(nextprops){
  //   // console.log(nextprops.categoriesNav) //{currentCategory: {…}, parentCategory: {…}, brotherCategory: Array(9)} 
  //   console.log(nextprops.goods.goodsList)
  // }

  //切换分类 参数为brotherCategory里的相对应的对象并把id解构出来,在传一个下标
  clickTab = ({ id }, index) => {
    if (this.state.currentCategoryId !== id) {
      this.setState({
        page: index,
        currentCategoryId: id
      })
      const { getCategoryNavDataAsync, getCategoriesAsync } = this.props
      getCategoryNavDataAsync({ id: id })
      getCategoriesAsync({ page: 1, size: 1000, categoryId: id })
      window.scrollTo(0, 0)
    }
  }

  //props里的信息数据改变时
  componentWillReceiveProps (nextProps) {
    const { brotherCategory } = nextProps.categoriesNav
    // console.log(brotherCategory)
    if (brotherCategory) {
      brotherCategory.forEach((item,index) => {
        if(item.id === Number(this.state.currentCategoryId)){
          this.setState({
            page: index
          })
        }
      })  
    }

  }

  render () {
    const { currentCategory, brotherCategory } = this.props.categoriesNav
    // console.log(currentCategory)
    const { goodsList } = this.props.goods
    const { page, currentCategoryId } = this.state
    // console.log(page)
    // console.log(categories.currentCategory)
    // console.log(currentCategory)
    return (
      currentCategory && goodsList ? <div className='noTabPageContent'>
        {/* 头部组件部分 */}
        <Header clickLeft={() => (this.goBack(currentCategoryId))} />
        {/* 导航部分 */}
        <div className='tabWrap'>
          <Tabs  tabs={brotherCategory} page={page} onTabClick={this.clickTab.bind(this)} renderTab={props => <div className="tabsItem">{props.name}</div>} />
        </div>
        <p className='Cname'>{currentCategory.name}</p>
        <p className='Cdesc'>{currentCategory.front_desc}</p>
        <GoodsList goodsList={goodsList}></GoodsList>
      </div> : null
    );
  }
}

export default Categorys;