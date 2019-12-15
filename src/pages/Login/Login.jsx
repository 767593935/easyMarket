import React, { Component } from 'react'
import './Login.less'
//引入路由
//import { Link } from 'react-router-dom'
//import { Button } from 'antd-mobile';
//引入logon
import logo from '../../assets/images/logo.png'
export default class Login extends Component {
  render () {
    return (
   <div className='login'>
     <div className='login_header'>
       <img src={logo} alt={logo}/>
       <h1>EasyMarket</h1>
     </div>
     <div className="login_content">
       <h2>用户登录</h2>
       <form action="###" className="form">
        <p>用户名</p>
        <input type="text"/>
        <p>密码:</p> 
        <input type="password"/>
       </form>
      
     </div>
   </div>
    )
  }
}
