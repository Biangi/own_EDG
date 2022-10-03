import React, { Component } from 'react'
import store from '../redux/store'
import {show, hide} from '../redux/actionCreator/TabbarActionCreator'
export default class Detail extends Component {
  componentDidMount() { 
    console.log('刚加载first');
    store.dispatch(hide())
  }
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUnmount(prevProps, prevState) {
    console.log(prevProps, prevState,'xioa销毁');
    store.dispatch(show())
  }
  render() {
    // console.log(this.props,'this.props');
    // console.log(this.props.match.params.detailId ,'动态路由传参接收');
    
    // console.log(this.props.location.query.detailId ,'query传参接收');
    return (
      <div>Detail---{this.props.match.params.detailId}</div>
    )
  }
}
