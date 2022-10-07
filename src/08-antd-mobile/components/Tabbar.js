import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.css'
export default class Tabbar extends Component {
  render() {
    return (
      <div className='tabbarD'>
        <ul className='tabbarD_ul'>
            <li className='tabbarD_li'>
                <NavLink to="/films" activeClassName='xxActive'>电影</NavLink> 
            </li>
            <li className='tabbarD_li'>
                <NavLink to="/cinemas" activeClassName='xxActive'>影院</NavLink> 
            </li>
            <li className='tabbarD_li'>
                <NavLink to="/center" activeClassName='xxActive'>我的</NavLink> 
            </li>
        </ul>
      </div>
    )
  }
}
