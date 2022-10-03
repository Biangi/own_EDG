import React,{ useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
export default function NowPlaying(props) {
    const [mlist, setmlist] = useState([])
    useEffect(() => {
        axios.get('/test.json').then(res => {
            console.log(res.data.films,'电影数据');
            setmlist(res.data.films)
        })
    }, [])
    const goDetail = (item) =>{
        console.log(item );
        // console.log(props,'propsprops');

        // 1、动态路由传参
        props.history.push(`/detail/${item.filmId}`)

        // 2、query传参
        // props.history.push({
        //     pathname: `/detail`,
        //     query:{
        //         detailId:item.filmId
        //     }
        // })
        // window.location.href = `#/detail/${item.filmId}`
    }
  return (
    <div>
        NowPlaying
        <ul style={{display:'flex',flexDirection:'column'}}>
           {mlist.map(item =>  
            // <NavLink to={'/detail/'+item.filmId} key={item.filmId}>{item.name}</NavLink>
                // <li key={item.name} onClick={() =>goDetail(item)}>{item.name}</li>
                <WithFilmItem key={item.filmId} {...item} {...props} onClick={() =>goDetail(item)}/> 
            )} 
        </ul>
        
    </div>
  )
}

function FilmItem(props) {
    return(
        <li onClick={() => {
            console.log(props,' *** ');
            props.history.push(`/detail/${props.filmId}`)    
        }}>{props.name}</li>
    )
}

const WithFilmItem = withRouter(FilmItem)
