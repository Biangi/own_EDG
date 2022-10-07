import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import ComingSoon from './fimls/ComingSoon'
import NowPlaying from './fimls/NowPlaying'
import style from './fimls/fimls.module.css'
import axios from 'axios'

import { Swiper, Toast } from 'antd-mobile'
export default class Films extends Component {
  state = {
    activeIndex:1,
    listAr:[]
  }
  getList=() => {
    axios.get({
      url:'/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=254492',
      headers:{
        'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.1","e":"16639863062534932647772161","bc":"310100"}`,
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res,'ppppppppp');
    })
  }
  componentDidMount() { 
    // let {listAr} = this.state
    // this.getList()
    let list = [
      {title:'title1',children:[{title:'children1',children:[{title:'children11',children:[]}]}]},
      {title:'title2',children:[{title:'children2',children:[{title:'children22',children:[]}]}]},
      {title:'title3',children:[{title:'children3',children:[{title:'children33',children:[]}]}]}
    ]
    
    let c =  this.digui(list)
    console.log(c,'ccccc');

    let listA = [1, 2, [3, 4, [5, 6], 7], 8, 9]
    let cA = this.diguiA(listA)
    console.log(cA,'cAAAA');
  }
  digui = (list) => {
    // let {listAr} = this.state
    let newlist = []
    list.forEach(item => {
      let obj = {
        title:item.title,
      }
      newlist.push(obj)
      if (item.children.length===0) return
      newlist = newlist.concat(this.digui(item.children))
    })
    return newlist
  }
  diguiA = (list) => {
    let newlistA = [] 
    list.forEach(item => {
      if (Array.isArray(item)){
        newlistA = newlistA.concat(this.diguiA(item))
      }else{
        newlistA.push(item)
      }
    })
    return newlistA
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
    const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
    const items = colors.map((color, index) => (
      <Swiper.Item key={index} >
        <div
          className={style.content}
          style={{ background: color }}
          onClick={() => {
            Toast.show(`你点击了卡片 ${index + 1}`)
          }}
        >
          {index + 1}
        </div>
      </Swiper.Item>
    ))
    return (
      <div>
        <div >
          <Swiper autoplayInterval={1000} autoplay loop>{items}</Swiper>
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