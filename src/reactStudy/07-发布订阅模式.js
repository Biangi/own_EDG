import React, { Component } from 'react'
import axios from 'axios'
import "../assets/css/commiution.css"

let bus = { // 订阅者模式 调度中心
    list:[],
    // 订阅
    subScribe(callback){
        this.list.push(callback)
        console.log(callback,this.list);
    },
    // 发布
    publish(text){
        // 遍历所有的list订阅者列表，将回调函数回调
        this.list.forEach(callback => {
            callback && callback(text)
        })
    }
}

export default class App extends Component {
  constructor(){
    super()
    this.state = {
        filmList:[],
        detail:"",
    }
    axios.get('/test.json').then(res => {
        console.log(res.data.films,'电影数据');
        this.setState({filmList:res.data.films})
    })
  }
    render() {
    return (
      <div className='zhongJian'>
        中间人模式
        { this.state.filmList.map((item,index) =>  
            <FilmItem {...item} key={item.filmId} onEvent={(value)=> {
                console.log(value);
            }
            }></FilmItem>
        ) }
        <FilmDatel fdetail={this.state.detail}></FilmDatel>

      </div>
    )
  }
}

class FilmItem extends Component{

    render (){
        let { name,poster,grade,synopsis } = this.props
        return (
            <div className='filmItemD' onClick={()=>{
                // console.log(synopsis);
                bus.publish(synopsis)
                }}>
                <img src={poster} alt={name} className='ItemD_img'></img>
                <div className='right_content'>
                    <h4 className='ItemD_content'>{name}</h4> 
                    <p>观众评分：{grade?grade:"暂无评分"}</p>
                </div>
                
            </div>
        )
    }
    filmC = (value)=>{
        console.log(value);
    }
}

class FilmDatel extends Component{
    constructor(){
        super()
        bus.subScribe((value) => {
            console.log(value,"filmdetail中定义的");
            this.setState({
                info: value
            })
        })
        this.state={
            info:""
        }
    }
    render(){
        return (
            <div className='filmDatel'>
                电影详情
                {this.state.info}
            </div>
        )
    }
}


// bus.subScribe((text) => {   // 订阅方法调用
//     // console.log(text);
// })
// bus.subScribe((text) => {   // 订阅方法调用
//     // console.log(text,']]]]]]]]]]');
// })

// setTimeout(() => {  // 防止先发布后订阅的情况，将发布 异步
//     bus.publish("这里是发布的内容111")
// }, 0);