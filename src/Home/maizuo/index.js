import React, { Component } from 'react'
import '../css/maizuo.css'

import Film from "./compent/film"
import Cinema from "./compent/cinema"
import IsMy from "./compent/my"
import MaiZuoNavBar from "./compent/maiZuoNavBar"
import MaiZuoTabBar from "./compent/maiZuoTabBar"
export default class maizuo extends Component {
    state={
        current:0
    }
    render() {
        
        return (
        <div>
            {/* <h1>卖座影院</h1> */}
            <MaiZuoNavBar event={(index)=>{
                this.setState({
                    current:index
                })
            }}/>
            { this.switch() }

            <MaiZuoTabBar isCurrent={this.state.current} event={(index)=>{
                this.setState({
                    current:index
                })
            }}/>
            
        </div>
        )
    }
    
    switch(){   // 监听当前展示的哪个页面
        switch (this.state.current) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>     
            case 2:
                return <IsMy></IsMy>
            default:
                return null;
        }
    }
}
