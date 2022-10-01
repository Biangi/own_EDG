import React, { Component } from 'react'
import '../../css/maizuo.css'
export default class maiZuoNavBar extends Component {
  state={
    arrList:[
      {
          id:1,
          name:"电影"
      },
      {
          id:2,
          name:"影院"
      },
      {
          id:3,
          name:"我的"
      },
  ],
  }
  render() {
    let arrListElement = this.state.arrList.map((item,index) => 
      <li onClick={() => { this.isSelect(index)} } key={item.id} className={this.props.isCurrent === index?'active':''}> 
        {item.name}
      </li> 
    )
    return (
      <ul className='maizuoUl'>
        {arrListElement}
      </ul>
    )
  }
  isSelect = (index) => {
    this.props.event(index)
    // this.setState({current:index})
    console.log('当前点击的是:',this.props.isCurrent,'index',index);
    // console.log(this.render);
    }
}
