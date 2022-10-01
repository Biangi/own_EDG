import React, { Component } from 'react'
// import axios from 'axios'
import "../assets/css/commiution.css"
// ————————————————初始化阶段
// 即将弃用 componentWillMount： render之前最后一次修改状态的机会/
// render： 只能访问this.props和this.state，不允许修改状态和dom输出
// componentDidMount：成功render并渲染完成真实DOM之后触发，可以修改DOM

// ————————————————运行中阶段
// compomemtWillReceiceProps：父组件修改属性触发
// shouldComponentUpdate：返回false会阻止render
// componentWillUpdate：不能修改属性和状态
// render： 只能访问this.props和this.state，不允许修改状态和dom输出
// compenentDidUpdate：可以修改DOM

// ————————————————销毁阶段
// compomemtWillUnmount：再删除组件之前进行清理操作，比如计时器和事件监听器
export default class App extends Component {
    state = {
        myName:"czxxx"
    }
    // componentWillMount(){    // 弃用、 即将挂载到DOM节点中,初始化数据
    //     console.log("第一次----component  WillMount");
    //     this.setState({
    //         myName:"kinweir"
    //     },)
    //     console.log(this.state.myName)

    // }
    render() {
        console.log("生命周期----render");
        return (
            <div className='zhongJian'>
            {this.state.myName}
            </div>
        )
    }
    componentDidMount(){    // 已经挂载到DOM节点中
        console.log("第一次---component  DidMount");
        // 一般这里写数据请求、调用依赖dom加载使用的插件
    }
}

// class FilmItem extends Component{
//     render (){
//         let { name,poster,grade,synopsis } = this.props
//         return (
//             <div className='filmItemD' onClick={()=>{
//                 this.props.onEvent(synopsis)
//                 }}>
//                 <img src={poster} alt={name} className='ItemD_img'></img>
//                 <div className='right_content'>
//                     <h4 className='ItemD_content'>{name}</h4> 
//                     <p>观众评分：{grade?grade:"暂无评分"}</p>
//                 </div>
                
//             </div>
//         )
//     }
//     filmC = (value)=>{
//         console.log(value);
//     }
// }

// class FilmDatel extends Component{
//     render(){
//         let {fdetail} = this.props
//         return (
//             <div className='filmDatel'>
//                 电影详情
//                 {fdetail}
//             </div>
//         )
//     }
// }
