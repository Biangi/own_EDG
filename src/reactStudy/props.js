import React, { Component } from 'react'
import Navbar from '../components/navBar'
import Sidebar from '../components/SideBar'
export default class App extends Component {
  render() {
    let obj = {
        title:"objT",
        leftShow:true
    }
    return (
        <div>
            <div>
                <h2>首页</h2>
                <Navbar title="首页" leftShow={false}/>
            </div>
            <div>
                <h2>列表</h2>
                <Navbar title="列表" />
            </div>
            <div>
                <h2>购物车</h2>
                <Navbar title="购物车" leftShow={true}/>
            </div>
            <div>
                <h2>ES6扩展运算符对象传参简写</h2>
                <Navbar {...obj} hash='hash'/> 
            </div>
            <hr style={{ border:'1px solid red'}}/>
            <div>
                <h2>函数式组件Sidebar</h2>
                <Sidebar bg="yellow"/> 
            </div>
        </div>
    )
  }
}
