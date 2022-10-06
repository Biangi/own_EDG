import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <input type='text'></input>
        <button onClick={() => {
            console.log('denglu 登录');
            localStorage.setItem('token','login123')
            console.log(this.props); 
            this.props.history.push('/center')
        }}>登录</button>
      </div>
    )
  }
}
