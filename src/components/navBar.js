import React, { Component } from 'react'
import zxPropTypex from 'prop-types'
export default class NavBar extends Component {
    // props属性的类型验证
    static propTypes = {    // es7的添加类属性方式
        title: zxPropTypex.string,
        leftShow: zxPropTypex.bool
    }
    // props 属性 默认值设置
    static defaultProps={
        // leftShow 属性中没有，就给他默认值 true
        leftShow:true
    }
    render() {
        console.log(this.props)
        // 接受来自父组件的传参
        let { title, leftShow } = this.props

        return (
            <div>
                <div>
                    {leftShow && <button>返回</button>}
                    navBar{title}
                </div>

            </div>
        )
    }
}
// props属性的类型验证 其一
// NavBar.propTypes = {
//     title:zxPropTypex.string,
//     leftShow:zxPropTypex.bool
// }

// 设置默认值, 其一
// NavBar.defaultProps={
//     // leftShow 属性中没有，就给他默认值 true
//     leftShow:true
// }