// 子传父
import React, { Component } from 'react'
class Navbar extends Component{
    render(){
        return( 
            <div style={{background:"red"}}>
                <button onClick={() => {
                    console.log("zizujiangengxin  通知父组件");
                    let obj = {
                        isS:true,
                        isArr:[],
                        isOb:{cc:'cc',vv:'vv'}
                    }
                    this.props.event(obj)
                }}>click</button>
                <button>navbar</button>
            </div>
        )
    }
}

class Sidebar extends Component {
  render() {
    return (
      <div style={{background:"yellow"}}>
        <ul>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
        </ul>
        
      </div>
    )
  }
}

export default class App extends Component{
    state = {
        isShow:true
    }
    render(){
        return(
            <div>
                <Navbar event={(cv) => {
                    console.log("父组件额回调",cv);
                    this.setState({
                        isShow:!this.state.isShow
                    })
                }}/> 

                {this.state.isShow && <Sidebar></Sidebar>}
            </div>
        )
    }
}
 

