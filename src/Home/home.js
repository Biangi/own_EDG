// import React from "react"
// class类组件
// class Home extends React.Component{
//     render(){
//         return <h1>hello h1</h1>
//     }
// }

// 函数组件
// function Home(){
//     return <h1>hello function component</h1>
// }
// export default Home


// 组件嵌套
import React, { Component } from 'react'
import './css/home.css' // 外部引入css样式
// 组件声明时函数声明和class声明都可以,但是在实际项目开发中,请保持页面的同意
class Test extends Component{
    render(){
        return (
            <div>Test 再嵌套</div>
        ) 
    }
}

class Navbar extends Component{
    number = 0
    myRef = React.createRef()
    state = {
        mytext:""
    }
    render(){
        return (
            <div>
                <div  className="navbarCls">Navbar</div> 
                <Test></Test>
                <p> {this.number>1?'number大于1':'number小于1'} </p>
                <input ref={this.myRef}></input>

                {/* <button onClick={ ()=>{
                    console.log("事件的第一种写法");
                } }>add1</button> */}
                {/* <button onClick={ this.add.bind(this) }>add1</button>  // 第二种写法*/}
                <button onClick={  this.add  }>add1</button>  <span> 第三种写法</span> 
                {/* <button onClick={ ()=>{this.add} }>add1</button>  // 第四种写法*/}
            </div>
        )
        
    }
    add = () => {
        console.log('第三种写法add0++', this.myRef);    
    }
}

const Swiper = () => {
    return (
        <div>
            <p>Swiper</p> 
            <input></input>
            <button >add2</button>
        </div>
    )
    // add(){
    //     console.log();
    // }

}

function Tabbar(){
    return(
        <div>Tabbar</div>
    )
}
export default class Home extends Component {
    myref = React.createRef()
    navbar = React.createRef()
    render() {
        return (
            <div>
                <Navbar ref={this.navbar}></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
                <input ref={this.myref}></input>
                <button onClick={()=>{
                    console.log("myRefC0",this.myref.current.value);
                }}>myrefInp</button>
            </div>
        )
    }
    // myRefC(){
    //      console.log("myRefC0",this.myref);
    //      console.log(this.navbar);
    // }
}
