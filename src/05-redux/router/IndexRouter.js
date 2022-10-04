import React, { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import NowPlaying from '../views/fimls/NowPlaying'
import ComingSoon from '../views/fimls/ComingSoon'
import Login from '../views/Login'
import City from '../views/City'
import Search from '../views/Search'
function isAuth() {
  return localStorage.getItem('token')
}
export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/films" component={Films}></Route>
            <Route path="/cinemas" component={Cinemas} exact></Route>
            <Route path="/cinemas/search" component={Search}></Route>
            {/* <Route path="/center" component={Center}></Route> */}
            <Route path="/center" render={(props) => {
              return isAuth()?<Center {...props}/>:<Redirect  to="/login"/> 
            }}/>

            {/* 1、动态路由传参 */}
            <Route path="/detail/:detailId" component={Detail}></Route>
            {/* <Route path="/detail" component={Detail}></Route> */}
            <Route path='/fimls/nowPlaying' component={NowPlaying}/> 
            <Route path='/fimls/comingSoon' component={ComingSoon}/> 

            <Route path="/login" component={Login}></Route>
            <Route path="/city" component={City}></Route>
            {/* 路由重定向 */}
            <Redirect from="/" to="/films" exact></Redirect>
            <Route component={NotFound}></Route>
          </Switch>
          {this.props.children}
        </HashRouter>
      </div>
    )
  }
}
