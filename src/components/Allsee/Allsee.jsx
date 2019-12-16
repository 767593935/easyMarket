import React, { Component } from "react";
import "./Allsee.less"
import PropTypes from "prop-types"
// import {Link} from "react-router-dom"
export default class Allsee extends Component {
  static propTypes={
    goodRelated:PropTypes.array.isRequired
  }
  toGood(id){
    this.props.history.replace(`/goods/${id}`)

  }
  render() {
    const {goodRelated} =this.props
    return (
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
    );
  }
}
