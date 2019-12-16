import React, { Component } from 'react';
//引入routes
import routes from './config/routes.js'
//引入路由相关
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
//引入底部组件
import FooterGuide from './components/FooterGuide/FooterGguide'

class App extends Component {
  
  render () {
    
    return (
      <div>
        <Router>
          <Switch>
            {
              routes.map((route, index) => {
                return (
                  <Route {...route} key={index} ></Route>
                )
              })
            }
            <Redirect from='/' to='/msite'></Redirect>
          </Switch>
         <FooterGuide/>
        </Router>

      </div>

    );
  }
}

export default App