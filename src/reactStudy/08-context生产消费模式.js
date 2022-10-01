import React, { Component } from 'react'
import axios from 'axios'
import "../assets/css/commiution.css"


const GlobalContext = React.createContext() // 创建context对象

export default class App extends Component {
  constructor(){
    super()
    this.state = {
        filmList:[],
        sInfo:"",
    }
    axios.get('/test.json').then(res => {
        console.log(res.data.films,'电影数据');
        this.setState({filmList:res.data.films})
    })
  }

    render() {
    return (
      <GlobalContext.Provider value={{
        call:"打电话",
        sms:"短信",
        info:this.state.sInfo,
        sInfoChange:(value) =>{
            this.setState({
                sInfo:value
            })
        }
      }}>
        <div className='zhongJian'>
            中间人模式
            { this.state.filmList.map((item,index) =>  
                <FilmItem {...item} key={item.filmId} onEvent={(value)=> {
                }
                }></FilmItem>
            ) }
            <FilmDatel ></FilmDatel>

        </div>
      </GlobalContext.Provider>
    )
  }
}

class FilmItem extends Component{
    render (){
        let { name,poster,grade,synopsis } = this.props
        return (
            <GlobalContext.Consumer>
                { (value)=>{
                       return <div className='filmItemD' onClick={()=>{
                            // this.props.onEvent(synopsis)
                            console.log(value);
                            value.sInfoChange(synopsis)
                            }}>
                            <img src={poster} alt={name} className='ItemD_img'></img>
                            <div className='right_content'>
                                <h4 className='ItemD_content'>{name}</h4> 
                                <p>观众评分：{grade?grade:"暂无评分"}</p>
                            </div>
                            
                        </div> 
                    }
                }
                
            </GlobalContext.Consumer>
        )
    }
    filmC = (value)=>{
        console.log(value);
    }
}

class FilmDatel extends Component{
    render(){
        return (
            <GlobalContext.Consumer>
                {(value) =>  <div className='filmDatel'>
                        电影详情
                        {value.info}
                    </div>
                }
            </GlobalContext.Consumer>
        )
    }
}
