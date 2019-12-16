
import React, { Component } from 'react'
import '../Comment/Comment.less'
import { Icon  } from 'antd-mobile';
import { getCommentList} from '../../api/index.js'
//引入子组件
import ajax from "../../api/index"
export default class Comment extends Component {
  state = {
    commentDetail:[]
    
  }
  async componentDidMount () {
   
    const result2= await ajax.getCommentList({
      valueId: this.props.match.params.id,
      typeId: 1,
      page:1,
      size:15
    })
    const commentDetail=result2.data
     console.log(commentDetail)
    
    this.setState({
      commentDetail:commentDetail
    })
  }
  render() {
    const {commentDetail} = this.state
    return (
      <div className="CommentContainer">
          {/* 专题评论页面*/}
         <div className='messages_header' >
         <Icon type="left" className='left' onClick={()=>(this.props.history.goBack())} />
        <span className="title">查看更多评论</span>
      </div>
         <ul className="commentList">
         {commentDetail.map((item,index)=>{
           return (
            <li className="comment_item" key={index}>
            <p className="userInfo">
              <span className="userName">preo</span>
              <span className="data">{item.add_time} </span></p>
           <p className="userComment"> {item.content}</p>
          </li>
           )
         })
         }
     
     {/*   <li className="comment_item">
         <p className="userInfo">
            <span className="userName">preo</span> 
            <span className="data">2019-02-20 16:48:46  </span></p>
         <p className="userComment"> 哈哈</p>
       </li>
       <li className="comment_item">
         <p className="userInfo">
            <span className="userName">preo</span> 
            <span className="data">2019-02-20 16:48:46  </span></p>
         <p className="userComment"> 哈哈</p>
       </li>
       */}</ul>
      
      </div>
    )
  }
}
