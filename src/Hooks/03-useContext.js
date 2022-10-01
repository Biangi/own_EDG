import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import "../assets/css/commiution.css"


const GlobalContext = React.createContext() // 创建context对象

export default function App() {
    const [sInfo,setsInfo] = useState("")
    const [filmList,setfilmList] = useState([])
    useEffect(() => {
        axios.get('/test.json').then(res => {
            // console.log(res.data.films,'电影数据');
            setfilmList(res.data.films)
        })
    })
    return (
        <GlobalContext.Provider value={{
        call:"打电话",
        sms:"短信",
        info:sInfo,
        sInfoChange:(value) =>{
            setsInfo(value)
        }
        }}>
        <div className='zhongJian'>
            中间人模式
            { filmList.map((item,index) => 
                <FilmItem {...item} key={item.filmId} onEvent={(value)=> {
                }}></FilmItem>
            ) }
            <FilmDatel ></FilmDatel>

        </div>
        </GlobalContext.Provider>
    )
}

function FilmItem (props){
    let { name,poster,grade,synopsis } = props
    const value = useContext(GlobalContext)
    return (
        <div className='filmItemD' onClick={()=>{
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
    )
}

function FilmDatel (){
    const value = useContext(GlobalContext)
    return (
        <div className='filmDatel'>
            电影详情
            {value.info}
        </div>
            
    )
}