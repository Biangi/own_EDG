import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
// import store from './redux/store'
import { connect } from 'react-redux'

class App extends Component {
  state = {
    isShow:true
  }
  routeGoBack = () => {
    console.log(this.props);
  }
  componentDidMount() { 
    // console.log('conect  store',this.props);
   }
  render() {
    // const { isShow } = this.state
    return (
      <div>
        {/* <p onClick={this.routeGoBack}>返回</p>
        <button onClick={() => {
            localStorage.clear()
        }}>清除LocationStorage</button> */}
        <MRouter>
          {this.props.isShow && <Tabbar></Tabbar>}
        </MRouter>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    a:1,
    b:2,
    isShow:state.TabbarReducer.show
  }
}
export default connect(mapStateToProps) (App)
