import React, { Component } from 'react'
import { Icon } from 'antd-mobile';
import './Detail.less'
export default class Detail extends Component {
  render () {
    return (
      <div className="detail_container">
        <div className='detail_header'>
          <Icon type="left" className='left' onClick={() => (this.props.history.goBack())} />
          <span className="title">填写留言</span>
        </div>
       <form action="http://localhost:3000/messages/300">
       <div className='detail_main'>
          <textarea name="mes"  ref="content" >
          </textarea>
          <span className="num">0 / 80</span>
        </div>
        <div className="buttons">
          <span  className ="clear">清空</span>
          <button className ="mes" onClick={()=>(this.props.history.goBack())} >留 言</button>
        
        </div>
      
       </form>
     </div>
       

   
    )
  }
}
