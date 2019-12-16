import React, { Component } from "react";
import "./index.less";
import PropTypes from "prop-types";
import { List, Stepper, Button ,Toast} from "antd-mobile";
import { connect } from "react-redux";
import { changeIsadd,addCartAsync } from "../../redux/action_creates";
@connect(state=>({addCart:state.addCart}), { changeIsadd ,addCartAsync})
class Addcart extends Component {
  static propTypes = {
    productList: PropTypes.array.isRequired,
    info: PropTypes.object.isRequired,
    changeNum:PropTypes.func.isRequired
  };
  
  state = {
    // 购物车的最小值
    val: 1
  };
  onChange = val => {
    this.setState({ val });
    this.props.changeNum(val)
  };
  changeisAdd=()=>{
    this.props.changeIsadd()
  }
  addCart=()=>{
    const {goods_id,id}=this.props.productList[0]
    const number=this.state.val
    this.props.addCartAsync({goodsId:goods_id,number,productId:id})
    Toast.success('加入购物车成功');
  }
  render() {
    const { productList, info } = this.props;

    return (
      <div>
        <div className="mast" onClick={this.changeisAdd}></div>
        {productList.map((item, index) => (
          <div className="cartStyle" key={index}>
            <div className="top">
              <div className="imgstyle">
                <img src={info.list_pic_url} alt="" />
                <div className="chooseStyle">
                  <p>
                    单价:<span>￥{item.retail_price}元</span>{" "}
                  </p>
                  <p>
                    库存:<span>{item.goods_number}件</span>{" "}
                  </p>
                  <p>已选择:</p>
                </div>
              </div>
              <div className="error" onClick={this.changeisAdd}>
                <span className="iconfont icon-iconfront-"></span>
              </div>
            </div>
            <div className="center">
              <p>数量</p>
              <List>
                <List.Item
                  wrap
                  extra={
                    <Stepper
                      style={{ width: "100%", minWidth: "100px" }}
                      showNumber
                      max={item.goods_number}
                      min={0}
                      value={this.state.val}
                      onChange={this.onChange}
                    />
                  }
                ></List.Item>
              </List>
            </div>
            <div className="bottom">
              <Button className="addCar" onClick={this.addCart}>加入购物车</Button>
              <Button className="buy" onClick={()=>Toast.fail('还未开发该功能')}>立即购买</Button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Addcart;
