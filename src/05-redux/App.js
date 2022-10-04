import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import store from './redux/store'
export default class App extends Component {
  state = {
    isShow:store.getState().TabbarReducer
  }
  routeGoBack = () => {
    console.log(this.props);
  }
  componentDidMount() { 
    store.subscribe(() => {
      console.log('app中的订阅',store.getState());
      this.setState({
        isShow:store.getState().TabbarReducer
      })
    })
    // console.log('app中的订阅',store.getState());
   }
  render() {
    const { isShow } = this.state
    return (
      <div>
        <p onClick={this.routeGoBack}>返回</p>
        <button onClick={() => {
            localStorage.clear()
        }}>清除LocationStorage</button>
        <MRouter>
          {isShow.show && <Tabbar></Tabbar>}
        </MRouter>
      </div>
    )
  }
}
