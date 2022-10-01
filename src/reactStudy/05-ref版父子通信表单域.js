import React, { Component } from 'react'

class Field extends Component { // 非受控组件，完全由父组件控制
    state = {
        value:""
    }
    clear(){
        this.setState({
            value:""
        })
    }
    render() {
        // console.log(this.props);
        let {label,type} = this.props
        return (
          <div>
            <label>{ label }</label>
            <input type={type} onChange={(eve) => {
                this.setState({value:eve.target.value})
            }} value={ this.state.value }></input>
          </div>
        )
    }
}

export default class fromApp extends Component {
    username = React.createRef()
    password = React.createRef()
  render() {
    return (
      <div>
        <h2>登录</h2>
        <Field label="账号" type="text" ref={this.username} />
        <Field label="密码" type="password" ref={this.password}/>
        <button onClick={this.loginC}>登录</button>
        <button onClick={this.cancleC}>重置</button>
      </div>
    )
  }
  
  loginC = () => {
    console.log("登录账号",this.username.current.state);
    console.log("登录密码",this.password.current.state);
  }
  cancleC = () => {
    console.log("取消登录");
    this.username.current.clear() 
    this.password.current.clear() 
  }
}
