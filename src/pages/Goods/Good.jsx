import React, { Component } from "react";
import "./index.less";
import { WingBlank, Carousel,Toast } from "antd-mobile";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Addcart from "../../components/Addcart/Addcart"
// import Allsee from "../../components/Allsee/Allsee"
import {
  getGoodsDetailAsync,
  getGoodsRelatedAsync,
  changeIsadd,
  addCollectAsync,
  getCartNumAsync
  
} from "../../redux/action_creates";
@connect(
  state => ({
    goodDetail: state.getGoodsDetail,
    goodRelated: state.getGoodsRelated,
    isAdd:state.changeIsadd,
    getCartDate:state.getCartDate
  }),
  { getGoodsDetailAsync, getGoodsRelatedAsync ,changeIsadd,addCollectAsync,getCartNumAsync}
)
class Good extends Component {
  state = {
    imgHeight: 350,
    isCollect:0,
    val:0,
    id:this.props.match.params.id
  };
/*   async UNSAFE_componentWillReceiveProps(props){
    const id=props.match.params.id
    await this.props.getGoodsDetailAsync(id);
    await this.props.getGoodsRelatedAsync(id);
  } */
  async componentDidMount() {
    const {id}=this.state
    console.log(id)
    await this.props.getGoodsDetailAsync(id);
    await this.props.getGoodsRelatedAsync(id);
    await this.props.getCartNumAsync();
    this.refs.infoGoodsDesc.innerHTML = this.props.goodDetail.info.goods_desc;
  }
  
  changeisAdd=()=>{
    this.props.changeIsadd()
  }
  addCollect=()=>{
    this.setState({
      isCollect:!this.state.isCollect
    })
    this.state.isCollect?this.refs.xing.style.color="yellow":this.refs.xing.style.color="#ccc"
    console.log(this.state.isCollect,this.props.goodDetail.info.id)
    this.props.addCollectAsync({typeId:this.state.isCollect,valueId:this.props.goodDetail.info.id})
  }
 
  changeNum=(val)=>{
    console.log(val)
    this.setState({
      val
    })
  }
  toGood=async (id)=>{
    this.setState({
      id
    })
    this.props.history.replace(`/goods/${id}`)
    await this.props.getGoodsDetailAsync(this.state.id);
    await this.props.getGoodsRelatedAsync(this.state.id);
    await this.props.getCartNumAsync();
  }
  render() {
    const {
      attribute,
      info,
      gallery,
      productList,
      issue,
      comment,
      
    } = this.props.goodDetail;
    const { goodRelated ,isAdd,getCartDate} = this.props;
    const {id}=info?info:''
    return this.props.goodDetail.info ? (
      <div className="outer">
        <header>
          <p className="lt">&lt;</p>
          <p className="name">{info.name}</p>
        </header>
        <WingBlank>
          <Carousel autoplay={true} infinite>
            {gallery.map(val => (
              <a
                key={val.id}
                href="http://www.alipay.com"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: this.state.imgHeight
                }}
              >
                <img
                  src={`${val.img_url}`}
                  alt=""
                  style={{ width: "100%", verticalAlign: "top" }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event("resize"));
                    this.setState({ imgHeight: 350 });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
        <div className="condition">
          <p>
            <span className="iconfont icon-pingjiaxingxing"></span>
            30天无忧退货
          </p>
          <p>
            <span className="iconfont icon-pingjiaxingxing"></span>
            48小时快速退款
          </p>
          <p>
            <span className="iconfont icon-pingjiaxingxing"></span>
            满88元免邮费
          </p>
        </div>
        <div className="desc">
          <h2 className="title">{info.name}</h2>
          <p className="feature">{info.goods_brief}</p>
          <h2 className="price">￥{info.retail_price}</h2>
        </div>
        {/* 选择商品规格 */}
        <div className="select">
                <span className="count">×&nbsp;{this.state.val}</span>
          <span className="choose" onClick={this.changeisAdd}>选择规格></span>
        </div>
       {/* 评价 */}
       {
         comment.data.content? <div className="comments">
         <div className="commentsTop">
           <p>评论({comment.count})</p>
           <Link to={`/comments/${id}`}>
             <p>查看全部></p>
           </Link>
         </div>
         <div className="allComponent">
           <div className="top">
             <span>匿名用户</span>
             <span>{comment.data.add_time}</span>
           </div>
           <div className="center">
             <p>{comment.data.content}</p>
             {comment.data.pic_list.map((item, index) => (
               <img key={index} src={item.pic_url} alt="" />
             ))}
           </div>
         </div>
       </div>
       :''
       }
       {/* 商品参数 */}
       {
         attribute?  <div className="parameter">
         <p className="good_params">—— 商品参数 ——</p>
         <ul className="good_attrs">
           {attribute.map((item, index) => {
             return (
               <li className="good_arrtsDes" key={index}>
                 <p className="attrName">{item.name}</p>
                 <p className="attrValue"> {item.value}</p>
               </li>
             );
           })}
         </ul>
       </div>
       :''
       }
      {/* 商品详情------>在info里的goods_desc里 */}
        <div className="infoGoodsDesc" ref="infoGoodsDesc"></div>
        {/* 常见问题 */}
        {
          issue?  <div className="commonProblem">
          <p className="commonProblemP">—— 常见问题 ——</p>
          <ul className="commonProblemUl">
            {issue.map((item, index) => {
              return (
                <li className="commonProblemLi" key={item.id}>
                  <p className="commonProblemQ">
                    <span>√</span>
                    {item.question}
                  </p>
                  <p className="commonProblemS">{item.answer}</p>
                </li>
              );
            })}
          </ul>
        </div>
       :''
        }
       {/* 大家都在看 */}
       {
         goodRelated? (
          <div className="allSee">
          <p className="allSeeP">—— 大家都在看 ——</p>
          <ul className="allSeeUl">
            {goodRelated.map((item, index) => {
              return (
                <li
                  className="allSeeLi"
                  key={index}
                  id={item.id}
                  onClick={()=>this.toGood(item.id)}
                >
                  
                  {/* <Link replace to={`/goods/${item.id}`}> */}
                    <img src={item.list_pic_url} alt="" />
                    <p className="allSeeName">{item.name}</p>
                    <p className="allSeePrice">￥ {item.retail_price}元</p>
                  {/* </Link> */}
                </li>
              );
            })}
          </ul>
        </div>
    
         ):''
       }
      {/* 加入购物车 */}
        <div className="add">
          <div className="icon">
            <p className="iconfont icon-icon-" onClick={this.addCollect} ref="xing"></p>
            <p className="iconfont icon-gouwucheman">
          <span>{getCartDate}</span>
            </p>
          </div>
          <div className="more">
            <p className="addCart" onClick={this.changeisAdd}>加入购物车</p>
            <p className="buyNow" onClick={()=>Toast.fail('还未开发该功能')}>立即购买</p>
          </div>
        </div>
        {/* 加入购物车样式 */}
        {
          isAdd?<Addcart productList={productList} info={info} changeNum={(val)=>this.changeNum(val)}/>:''
        }
      
      </div>
    ) : (
      ""
    );
    }
}
export default Good;

/*
 */
