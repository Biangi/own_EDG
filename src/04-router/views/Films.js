import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import ComingSoon from './fimls/ComingSoon'
import NowPlaying from './fimls/NowPlaying'
export default class Films extends Component {
  goHot = () => {
    console.log('正在热映');
    // window.location.href = '#/fimls/nowPlaying'
  }
  goComingsoon = () => {
    console.log('goComingsoon');
  }
  render() {
    return (
      <div>
        <div style={{height:'150px',background:'orange'}}>
          轮播
        </div>
        <div style={{display:'flex',justifyContent: 'space-around'}}>
          <p onClick={this.goHot}>正在热映</p>
          <p onClick={this.goComingsoon}>即将上映</p>
        </div>
          <Switch>
            <Route path='/films/nowPlaying' component={NowPlaying}/> 
            <Route path='/films/comingSoon' component={ComingSoon}/> 
            <Redirect from='/films' to='/films/nowPlaying'></Redirect>
          </Switch>
        {/* <NowPlaying></NowPlaying> */}
      </div>
    )
  }
}
