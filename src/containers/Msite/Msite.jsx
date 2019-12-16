import React, { Component } from 'react';
//引入接口
import HTTP from '../../api/index'
import Swiper from 'swiper'
// 引入Swiper的样式文件
import 'swiper/css/swiper.css'
import {Link} from 'react-router-dom'
//引入图片懒加载插件
import LazyLoad from "react-lazy-load"

//引入样式
import './Msite.less';

class Msite extends Component {
  state = {
    banner: [],//轮播图数据
    categorys: [
      {
        src: 'http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png',
        name: '居家',
        id: 1005000
      },
      {
        src: 'http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png',
        name: '餐厨',
        id: 1005001
      },
      {
        src: 'http://yanxuan.nosdn.127.net/11abb11c4cfdee59abfb6d16caca4c6a.png',
        name: '配件',
        id: 1008000
      },
      {
        src: 'http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png',
        name: '服饰',
        id: 1010000
      },
      {
        src: 'http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png',
        name: '志趣',
        id: 1019000
      }
    ],//分类导航数据
    brandList: [], //品牌数据
    newGoodsList: [], //新品首发数据
    hotGoodsList: [], //人气推荐数据
    topicList: [], //专题精选数据
    categoryList: [] //分类数据
  }
  async componentDidMount () {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg', 'http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg', 'http://yanxuan.nosdn.127.net/8e50c65fda145e6dd1bf4fb7ee0fcecc.jpg'],
        data2: ['https://yanxuan.nosdn.127.net/14943267735961674.jpg', 'https://yanxuan.nosdn.127.net/14942996754171334.jpg', 'https://yanxuan.nosdn.127.net/14942996754171334.jpg']
      });
    }, 100);
    //发送请求获取数据
    const result = await HTTP.getHomeData()
    // console.log(result)
    this.setState({
      banner: result.banner,
      categorys: result.channel,
      brandList: result.brandList,
      newGoodsList: result.newGoodsList,
      hotGoodsList: result.hotGoodsList,
      topicList: result.topicList,
      categoryList: result.categoryList
    })
    // console.log(data)

    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
      }
    })
  }

  //界面更新之后执行
  componentDidUpdate(){
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
      }
    })
  }

  

  //去制造商详情页
  goto2 = (id) => {
    this.props.history.push(`/branddetail/${id}`)
  }

  //去新品首发详情页
  goto3=(id)=>{
    this.props.history.push(`/goods/${id}`)
  }

  //点人气推荐去详情页
  goto4=(id)=>{
    this.props.history.push(`/goods/${id}`)
  }

  //点居家去详情页
  goto5=(id)=>{
    this.props.history.push(`/goods/${id}`)
  }

  //点下面的分类各个商品去详情页
  goto6=(id)=>{
    this.props.history.push(`/goods/${id}`)
  }

  //点更多好物去分类组件页面
  goto7=(id)=>{
    this.props.history.push(`/categorys/${id}`)
  }

  //点击专题商品去详情页
  goto8=(id)=>{
    this.props.history.push(`/topicDetail/${id}`)
  }
  render () {
    const { categorys, banner, brandList, newGoodsList, hotGoodsList, topicList, categoryList } = this.state
    // console.log(banner)  
    return (
      <LazyLoad>
        <div>
          {/* 轮播图部分 */}
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                banner.map((item, index) => (
                  <div className="swiper-slide" key={index}>
                    <a
                      href="###"
                      className="link_to_food"
                    >
                      <div className="food_container">
                        <img src={item.image_url} alt='' />
                      </div>
                      <span></span>
                    </a>
                  </div>
                ))
              }
            </div>
            <div className="swiper-pagination"></div>
          </div>
          {/* 导航按钮部分 */}
          <ul className='navTop'>
            {
              categorys.map((item, index) => {
                return (
                  <Link to={`/categorys/${item.id}`} key={index} className='link'>
                    <li key={index}>
                      <div>
                        <img src={item.icon_url} alt="" />
                        <div>{item.name}</div>
                      </div>
                    </li>
                  </Link>
                )
              })
            }
          </ul>
          <div className='pinPai'>
            品牌制造商提供
          </div>
          <ul className='brand'>
            {
              brandList.map((item, index) => (
                <li onClick={()=>(this.goto2(item.id))} key={index}>
                  <div>
                    <p>{item.name}</p>
                    <p>{item.floor_price}元起</p>
                  </div>
                  <img src={item.pic_url} alt="" />
                </li>
              ))
            }
            {/* <li onClick={this.goto2}>
              <div>
                <p>CK制造商</p>
                <p>39元起</p>
              </div>
              <img src="http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg" alt="" />
            </li> */}
          </ul>
          {/* 新品首发 */}
          <div className='newProduct'>
            <p className='newTitle'>新品首发</p>
            <ul className='newProducts'>
              {/* <li>
                <img src={} alt="" />
                <p>蔓越莓曲奇200g</p>
                <span>$36</span>
              </li> */}
              {
                newGoodsList.map((item, index) => (
                  <li key={index} onClick={()=>{this.goto3(item.id)}}>
                    <img src={item.list_pic_url} alt="" />
                    <p>{item.name}</p>
                    <span>${item.retail_price}</span>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* 人气推荐 */}
          <div className='recommend'>
            <div className='recommendTitle'>
              人气推荐
              </div>
            <ul className='recommends'>
              {/* <li>
                <img src="http://yanxuan.nosdn.127.net/583812520c68ca7995b6fac4c67ae2c7.png" alt="" />
                <div>
                  <p>双宫茧桑蚕丝被 空调被</p>
                  <p>一级桑蚕丝，吸湿透气柔软</p>
                  <p>￥699</p>
                </div>
              </li> */}
              {
                hotGoodsList.map((item, index) => (
                  <li key={index} onClick={()=>{this.goto4(item.id)}}>
                    <img src={item.list_pic_url} alt="" />
                    <div>
                      <p>{item.name}</p>
                      <p>{item.goods_brief}</p>
                      <p>￥{item.retail_price}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* 专题精选 */}
          <div className='selection'>
            <div className='selectionTitle'>
              专题精选
            </div>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {/* <div className="swiper-slide" >
                  <a
                    href="###"
                    className="link_to_food"
                  >
                    <div className="food_container">
                      <img src="http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg" alt='' />
                    </div>
                    <span></span>
                  </a>
                </div> */}
                {
                  topicList.map((item, index) => (
                    <div className="swiper-slide" key={index} onClick={()=>{this.goto8(item.id)}}>
                      <a
                        href="###"
                        className="link_to_food"
                      >
                        <div className="food_container">
                          <img style={{ height: "192px" }} src={item.scene_pic_url} alt='' />
                        </div>
                        <span>
                          <p style={{ fontSize: '20px' }}>{item.title} <span style={{ color: '#F54', fontSize: '17px' }}>{item.price_info + '元起'}</span></p>
                          <p style={{ color: "#000" }}>{item.subtitle}</p>
                        </span>
                      </a>
                    </div>
                  )
                  )
                }
              </div>
            </div>
          </div>
          {/* 类别名称部分 */}
          <div className='categoryBox'>
          {
            categoryList.map((item, index) => (
              <div key={index}>
                <div className='categoryName'>
                  {item.name}
                </div>
                <div className='cateGoryGoodsWrap'>
                  {/* <a href="#/goods/1009024">
                  <div className='goodsItemImg'>
                    <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" />
                  </div>
                  <div className='goodsItemName'>
                    日式和风懒人沙发
                 </div>
                  <div className='goodsItemPrice'>
                    ￥66
                 </div>
                </a> */}
                  {
                    item.goodsList.map((item2, index2) => (
                      <a href="#/goods/1009024" key={index2} onClick={()=>{this.goto6(item2.id)}}>
                        <div className='goodsItemImg'>
                          <img className='imgLazyload' src={item2.list_pic_url} alt="" />
                        </div>
                        <div className='goodsItemName'>
                          {item2.name}
                        </div>
                        <div className='goodsItemPrice'>
                          ￥{item2.retail_price}
                        </div>
                      </a>
                    ))
                  }
                  <a href="#/categorys/1000500" className='categoryMoreGoods' onClick={()=>{this.goto7(item.id)}}>
                    <div>
                      更多{item.name}好物
                    </div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="more" />
                  </a>
                </div>
              </div>)
            )
          }
          {/* <div className='categoryName'>
            居家
          </div>
          <div className='cateGoryGoodsWrap'>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" />
              </div>
              <div className='goodsItemName'>
                日式和风懒人沙发
              </div>
              <div className='goodsItemPrice'>
                ￥66
              </div>
            </a>
            <a href="#/categorys/1000500" className='categoryMoreGoods'>
              <div>
                更多居家好物
              </div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="more" />
            </a>
          </div> */}
        </div>
        </div>
      </LazyLoad>
    );
  }
}

export default Msite;