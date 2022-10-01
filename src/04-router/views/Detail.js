import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    console.log(this.props,'this.props');
    console.log(this.props.match.params.detailId ,'动态路由传参接收');
    
    // console.log(this.props.location.query.detailId ,'query传参接收');
    return (
      <div>{this.props.match.params.detailId}</div>
    )
  }
}
