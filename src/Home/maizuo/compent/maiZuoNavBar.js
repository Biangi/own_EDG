import React, { Component } from 'react'
import '../../css/maizuo.css'
export default class maiZuoNavBar extends Component {
  state={
    arrList:[
      {
          id:1,
          name:"返回"
      },
      {
          id:2,
          name:"卖座影院"
      },
      {
          id:3,
          name:"我的"
      },
  ],
  }
  render() {
    let arrListElement = this.state.arrList.map((item,index) => 
      <li onClick={() => { this.isSelect(index)} } key={item.id} > 
        {item.name}
      </li> 
    )
    return (
      <ul className='maiZuoNavBarD'>
        {arrListElement}
      </ul>
    )
  }
  isSelect = (index) => {
    if (index===2) {
      this.props.event(index)
    }
    
    // this.setState({current:index})
    console.log('当前点击的是:','index',index);
    // console.log(this.render);
    }
}
