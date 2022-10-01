import React, { Component } from 'react'
import axios from 'axios'
import "../assets/css/commiution.css"


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
            <div className='zhongJian'>
                {/* { this.state.filmList.map((item,index) =>  
                    <FilmItem {...item} key={item.filmId} onEvent={(value)=> {
                    }
                    }></FilmItem>
                ) } */}

                <Swiper >
                    <div>1111</div>
                    <div>222</div>
                    <div>333</div>
                </Swiper>
            </div>
        )
    }
}

// class FilmItem extends Component{
//     render (){
//         let { name,poster,grade,synopsis } = this.props
//         console.log(synopsis);
//         return (
//             <div className='filmItemD' >
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

class Swiper extends Component{
    render(){
        return (
            <div >
                {this.props.children}
            </div>
        )
    }
}
