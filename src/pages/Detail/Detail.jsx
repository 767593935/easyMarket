import React, { Component } from 'react'
import { Icon } from 'antd-mobile';
import './Detail.less'
import { postSetComment} from '../../api/index.js'
import ajax from "../../api/index"
export default class Detail extends Component {
  state={
    isShow:false,
    num:0,
  }
  async componentDidMount () {
    const result1 = await ajax.postSetComment({
      content: this.refs.content.value,
      typeId:1,
      valueId:this.props.match.params.id,
    })
    console.log(result1)
   

  }


  clear=()=>{
    this.refs.content.value=""
   
  }
  changeHandler=()=>{
   this.num =this.refs.content.value.substring(0, 80)
    this.setState({
      isShow:this.refs.content.value?true:false,
      num:this.refs.content.value.length,
    
    })
  }
  render () {
    const {isShow,num} =this.state
    console.log(isShow)
    return (
      <div className="detail_container">
        <div className='detail_header'>
          <Icon type="left" className='left' onClick={() => (this.props.history.goBack())} />
          <span className="title">填写留言</span>
        </div>
        <form action="http://localhost:3000/messages/300">
          <div className='detail_main'>
            <textarea name="mes" ref="content" maxlength="80" onChange={this.changeHandler}>
            </textarea>
            <span className="num">{num} / 80</span>
          </div>
          <div className="buttons">
            {
               isShow?<span className="clear" onClick={this.clear}>清空</span>:""
            }
         
            <button className="mes" >留 言</button>

          </div>
        </form>
      </div>



    )
  }
}
