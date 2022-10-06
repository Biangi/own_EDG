import React, { Component } from 'react'
import { connect } from 'react-redux';
// import store from '../redux/store'
import {show, hide} from '../redux/actionCreator/TabbarActionCreator'
class Detail extends Component {
  componentDidMount() { 
    console.log('刚加载first',this.props);
    // store.dispatch(hide())
    this.props.hide()
  }
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUnmount(prevProps, prevState) {
    console.log(prevProps, prevState,'xioa销毁');
    // store.dispatch(show())
    this.props.show()
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
// connect(将来给孩子传的属性，将来给孩子传的回调函数)

export default connect(null,{
  show,
  hide
})(Detail)
