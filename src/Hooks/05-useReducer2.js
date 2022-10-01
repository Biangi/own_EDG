import React, { useReducer, useEffect, useContext } from 'react'
import axios from 'axios'
import "../assets/css/commiution.css"

const second = {
    sInfo:"",
    filmList:[]
}

const reducer = (perState,action) =>{
    const newState = {...perState}
    switch (action.type) {
        case 'getList':
            newState.filmList = action.value
            return newState
        case 'getDetail':
            newState.sInfo = action.value
            return newState
        default:
            return perState
    }

}

const GlobalContext = React.createContext() // 创建context对象

export default function App() {
    const [state, dispatch] = useReducer(reducer, second)
    useEffect(() => {
        axios.get('/test.json').then(res => {
            // console.log(res.data.films,'电影数据');
            dispatch({
                type:"getList",
                value:res.data.films
            })
        })
    })
    return (
        <GlobalContext.Provider value={{
            state, 
            dispatch
        }}>
        <div className='zhongJian'>
            useReducer/useContext/供应商模式
            { state.filmList.map((item,index) => 
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
    const {dispatch} = useContext(GlobalContext)
    return (
        <div className='filmItemD' onClick={()=>{
            // this.props.onEvent(synopsis)
            dispatch({
                type:"getDetail",
                value:synopsis
            })
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
    const {state} = useContext(GlobalContext)
    return (
        <div className='filmDatel'>
            电影详情
            {state.sInfo}
        </div>
            
    )
}