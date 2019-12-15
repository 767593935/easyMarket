import React, { Component } from 'react'
//引入专题路由组件
import Special from './pages/Special/Special.jsx'
//引入登录组件
import Login from './pages/Login/Login.jsx'
//引入底部组件
import FooterGuide from './pages/FooterGuide/FooterGuide.jsx'
//引入routes 
import routes from './config/routes.js'
// 引入路由
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom'
export default class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
     {/*    <Route path="/" component={Special}  />
        <Route path="/login" component={Login}  /> */}
       
         {
                  routes.map((route, index) => (<Route key={index} {...route} />))
                }
             <Redirect to="msite"></Redirect>  
        </Switch>
        <FooterGuide />
      </Router>
    )
  }
}
