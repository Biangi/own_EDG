import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
export default class App extends Component {
  render() {
    return (
      <div>
        333
        <button onClick={() => {
            localStorage.clear()
        }}>清除LocationStorage</button>
        <MRouter>
            <Tabbar></Tabbar>
        </MRouter>
      </div>
    )
  }
}
