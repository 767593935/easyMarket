import React, { Component } from "react";
import "./index.less";
import { getCommentAsync } from "../../redux/action_creates";
import { connect } from "react-redux";
// import Proptypes from "prop-types"
@connect(state => ({ comment: state.getComment }), { getCommentAsync })
class Comment extends Component {
 /*  static proptypes={

  } */
  async componentDidMount() {
    console.log(this)
    const id=this.props.match.params.id
    this.props.getCommentAsync({
      valueId: id,
      typeId: 0,
      page: 1,
      size: 100
    });
  }
  render() {
    const data = this.props.comment;
    return (
      <div className="outer">
        <header>
          <span onClick={()=>this.props.history.goBack()}>&lt;</span>
          <span>查看更多评价</span>
        </header>
        <ul className="comment">
        {data.length
          ? data.map((item, index) => {
            return (
           
                <li key={index}>
                  <div className="top">
                    <span>匿名用户</span>
                    <span>{item.add_time}</span>
                  </div>
                  <div className="center">
                    <p>{item.content}</p>
                    {item.pic_list.map((item, index) => {
                      return <img key={index} src={item.pic_url} alt="" />;
                    })}
                  </div>
                </li>
             )
            })
          : ""}
           </ul>
      </div>
    );
  }
}
export default Comment;
