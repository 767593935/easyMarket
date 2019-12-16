import React, { Component } from 'react'
// 引入路由
import { NavLink} from 'react-router-dom'
//引入样式文件
import '../Special/Special.less'
//引入组件
import Messages from '../Messages/Messages.jsx'
import ajax from "../../api/index"
export default class Special extends Component {
  state = {
    data: []
  }
  async componentDidMount () {
    const result = await ajax.getTopicData({
      page: 1,
      size: 30
    })
    const { data } = result
  
    this.setState({
      data
    })



  }
  render () {
    const data = this.state.data
    return (
    
      <div className='specialContainer'>
          {/* 专题页面*/}
        <ul className='nav nav_tabs' >
          {
            data.map((item, index) => {
              return (

                <li className="nav_item" key={index} >
                  <NavLink push="true" to={`/messages/${item.id}`} >
                  <img src={item.scene_pic_url} alt="" />
                  <h2 className="title">{item.title}</h2>
                  <p className="des">{item.subtitle}</p>
                  <p className="price">{item.price_info}元起</p>
                  </NavLink>
                </li>

        )

      })
    }
    {/* <Route path="/messages/:id" component={Messages}></Route> */}
          {/*  <li className="nav_item">
         <a href="###">
           <img src="https://yanxuan.nosdn.127.net/14943267735961674.jpg" alt=""/>
           <h2 className="title">关爱他成长的每一个足迹</h2>
           <p className="des">专业运动品牌同厂，毛毛虫鞋买二送一</p>
           <p className="price">0元起</p>
         </a>
        </li> 
        <li className="nav_item">
         <a href="###">
           <img src="https://yanxuan.nosdn.127.net/14943267735961674.jpg" alt=""/>
           <h2 className="title">关爱他成长的每一个足迹</h2>
           <p className="des">专业运动品牌同厂，毛毛虫鞋买二送一</p>
           <p className="price">0元起</p>
         </a>
        </li> 
        <li className="nav_item">
         <a href="###">
           <img src="https://yanxuan.nosdn.127.net/14943267735961674.jpg" alt=""/>
           <h2 className="title">关爱他成长的每一个足迹</h2>
           <p className="des">专业运动品牌同厂，毛毛虫鞋买二送一</p>
           <p className="price">0元起</p>
         </a>
        </li>  */}
        </ul>

      </div >
    )
  }
}
