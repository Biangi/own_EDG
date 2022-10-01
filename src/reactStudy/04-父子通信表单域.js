import React, { Component } from 'react'

class Field extends Component { // 受控组件，完全由父组件控制
    render() {
        // console.log(this.props);
        let {label,type} = this.props
        return (
          <div>
            <label>{ label }</label>
            <input type={type} onChange={ (event) => {
              // console.log(event,'cheventangeEV');
              this.props.changeE(event.target.value)
            }} value={this.props.value}></input>
          </div>
        )
    }
}

export default class fromApp extends Component {
    state = {
        account:"username",
        passwordS:""
    }
  render() {
    return (
      <div>
        <h2>登录</h2>
        <Field label="账号" type="text" changeE={ (value) =>{
            this.setState({account: value}) 
        } } />
        <Field label="密码" type="password" changeE={ (value) =>{
            this.setState({passwordS: value})  
        } }/>
        <button onClick={this.loginC}>登录</button>
        <button onClick={this.cancleC}>重置</button>
      </div>
    )
  }
  
  loginC = () => {
    console.log("登录",this.state);
  }
  cancleC = () => {
    console.log("取消登录");
    this.setState({
        account:"",
        passwordS:""
    })
  }
}
