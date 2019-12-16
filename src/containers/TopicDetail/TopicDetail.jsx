import React, { Component } from 'react'
//引入样式
import './TopicDetail.less'


import { NavLink } from 'react-router-dom'
import Http from '../../api/index'
// //引入子组件
// import ajax from "../../api/index"
export default class TopicDetail extends Component {
  state = {
    detailRelated: [],
    commentDetail:[],
    id:""
  }

  async componentDidMount () {  
    const result1 = await Http.getTopicDetailRelated({
      id: this.props.match.params.id
    })
    const result2= await Http.getCommentList({
      valueId: this.props.match.params.id,
      typeId: 1,
      page:1,
      size:5
    })
    const commentDetail=result2.data
     
    const detailRelated = result1
    const id =this.props.match.params.id
    
    this.setState({
      detailRelated: detailRelated,
      commentDetail:commentDetail,
      id:id
    
    })
    
  }

  render () {
    
    const { detailRelated ,commentDetail,id} = this.state
    return (
      <div className='messagesContainer'>
          {/* 专题详情页*/}
        <div className='messages_header'>
          <div className='left' onClick={()=>{this.props.history.goBack()}}><i className='iconfont icon-xiangzuo'></i></div>
          <div className="title">关爱他成长的每个足迹</div>
        </div>
        <div className="message_img">
          <img src="//yanxuan.nosdn.127.net/75c55a13fde5eb2bc2dd6813b4c565cc.jpg" alt="" />
          <img src="//yanxuan.nosdn.127.net/e27e1de2b271a28a21c10213b9df7e95.jpg" alt="" />
          <img src="//yanxuan.nosdn.127.net/9d413d1d28f753cb19096b533d53418d.jpg" alt="" />
          <img src="//yanxuan.nosdn.127.net/64b0f2f350969e9818a3b6c43c217325.jpg" alt="" />
          <img src="//yanxuan.nosdn.127.net/a668e6ae7f1fa45565c1eac221787570.jpg" alt="" />
          <img src="//yanxuan.nosdn.127.net/0d4004e19728f2707f08f4be79bbc774.jpg" alt="" />
          <img src="//yanxuan.nosdn.127.net/79ee021bbe97de7ecda691de6787241f.jpg" alt="" />
        </div>
        <div className="message_wrap">
          <div className="titleLine">
            {/* 精选留言 */}
            <div className="titleName">精选留言</div>
            <div className="titleIcon">
              <NavLink to={`/TopicCommentWrite/${id}`}>
                <i className='iconfont icon-pan_icon'>
                </i>
              </NavLink>

            </div>
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
           
         {/*    <li className="comment_item">
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
          {/*   <a href="###"> 查看更多评论 </a> */}
             {/* 评论页面*/}
          <NavLink to={`/comment/${id}`} className="moreComment">查看更多评论</NavLink>
        </div>
        <div className="relateTopic">
          <div className="relateTitle">推荐专题</div>
          <ul className="relateComment">
            {
              detailRelated.map((m, index) => {
                return (
                  <li className="relateItem" key={index}>
                    <img className="img" src={m.scene_pic_url} alt="" />
                    <p className="des">{m.title}</p>
                  </li>
                )
              })
            }

            {/* <li className="relateItem">
          <img className="img" src="https://yanxuan.nosdn.127.net/14942996754171334.jpg" alt=""/>
          <p className="des">"这些就是他们想要的礼物清单"</p>
        </li>
        <li className="relateItem">
          <img className="img" src="https://yanxuan.nosdn.127.net/14938092956370380.jpg" alt=""/>
          <p className="des">"多款商品直减中，最高直减400元"</p>
        </li>
        <li className="relateItem">
          <img className="img" src="https://yanxuan.nosdn.127.net/14939496197300723.jpg" alt=""/>
          <p className="des">"如何挑选适合自己的好物？"</p>
        </li>
       */}

          </ul>
        </div>

      </div>
    )
  }
}
