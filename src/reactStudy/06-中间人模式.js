import React, { Component } from 'react'
import axios from 'axios'
import "../assets/css/commiution.css"
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
                this.setState({detail: value}) 
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
                this.props.onEvent(synopsis)
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
    render(){
        let {fdetail} = this.props
        return (
            <div className='filmDatel'>
                电影详情
                {fdetail}
            </div>
        )
    }
}
