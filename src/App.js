import React, { Component } from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Routes from "./config/Routes"
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <Switch>
          {
            Routes.map((item,index)=>{
              return <Route {...item} key={index}></Route>
            })
          }
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

