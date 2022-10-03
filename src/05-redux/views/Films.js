import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import ComingSoon from './fimls/ComingSoon'
import NowPlaying from './fimls/NowPlaying'
import style from './fimls/fimls.module.css'
export default class Films extends Component {
  state = {
    activeIndex:1
  }
  goHot = () => {
    console.log(this.props,'正在热映');
    // window.location.href = '#/fimls/nowPlaying'
    this.props.history.push('/films/nowPlaying')
    this.setState({
      activeIndex:1
    })
  }
  goComingsoon = () => {
    console.log('goComingsoon');
    this.props.history.push('/films/comingSoon')
    this.setState({
      activeIndex:2
    })
  }
  render() {
    let { activeIndex } = this.state
    return (
      <div>
        <div style={{height:'150px',background:'orange'}}>
          轮播
        </div>
        <div style={{display:'flex',justifyContent: 'space-around'}}>
          <p onClick={this.goHot} className={activeIndex===1?style.active_p:''}>正在热映</p>
          <p onClick={this.goComingsoon} className={activeIndex===2?style.active_p:''}>即将上映</p>
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