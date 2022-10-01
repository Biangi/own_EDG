import React, { Component } from 'react'

export default class Center extends Component {
  render() {
    return (
      <div>
        <h2>Center</h2>
        <div onClick={() => {
          console.log(this.props,'center-Props');   
          this.props.history.push()       
        }}>订单管理</div>
      </div>
    )
  }
}
