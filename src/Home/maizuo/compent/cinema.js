import React, { Component } from 'react'
import axios from "axios";
import BetterScroll from 'better-scroll'
import "../../css/maizuo.css"

export default class Cinema extends Component {
    
    constructor(){
        super()
        this.state = {
            cinemaList:[],
            // bakCinemaList:[],
            searchText:"",
        }
        axios({
            url:"https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=5351510",
            method:"get",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16586575321505858483650561"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            this.setState({
                cinemaList:res.data.data.cinemas,
                // bakCinemaList:res.data.data.cinemas,
            },() => {
                console.log(this.state.cinemaList);
                new BetterScroll('.list_content' )
            })
        })
    }
    render() {
        // {this.drawCinemaData()}
        let cinemaListElement = this.getCinemaList().map(item => 
            <div key={item.cinemaId} className='cinemaList_Li'>
                <div className='cinemaList_info'>
                  <p className='listName'>{item.name} </p> 
                  <p className='listAddress'>{item.address} </p>
                </div>
                <div className='cinemaList_price'>
                    <p className='list_lowPrice'>￥{item.lowPrice}</p> 
                    <p className='list_distance'> 距离未知 </p>     
                </div>
            </div>    
        )
        return (
            <div>
                <div className='list_top'>
                    <div className='title'>
                        <span>上海</span>
                        <span className='title_text'>影院</span>
                        <span onClick={ this.serachList }>搜索</span>
                    </div>
                    <div className='filter_list'>
                        <span>全程</span>
                        <span className='title_text'>APP订票</span>
                        <span>去过</span>
                    </div>
                </div>
                <div className='inp_serach'>
                    <input value={this.state.searchText} onInput={ this.inpChange } placeholder="输入影院名称" className='inp'></input>
                    <span onClick={ this.serachChange } className='inp_a'>取消</span>
                </div>
                <div className='list_content'>
                    <div>
                        { cinemaListElement }
                    </div>
                    
                </div>
            </div>
        )
    }
    serachList(){   // 展示搜索框
        let cls = document.getElementsByClassName("list_top")
        let inp = document.getElementsByClassName("inp_serach")
        console.log(cls,'点击搜索');
        cls[0].style = "display:none"
        inp[0].style = "display:block"
    }
    serachChange = () =>{  
        console.log('取消');
        let cls = document.getElementsByClassName("list_top")
        let inp = document.getElementsByClassName("inp_serach")
        cls[0].style = "display:block"
        inp[0].style = "display:none"
        this.setState({
            cinemaList:this.state.bakCinemaList
        })
    }
    inpChange = (eve) =>{
        this.setState({    // 使用了setState render函数都会重新执行
            searchText:eve.target.value
        })

        // console.log('搜索的内容',eve.target.value);
        // let val = this.state.cinemaList
        // let result = this.state.bakCinemaList.filter(item =>item.name.toUpperCase().includes(val.toUpperCase()) ||
        //  item.address.toUpperCase().includes(val.toUpperCase()))

        // this.setState({
        //     cinemaList:result
        // },() => {
        //     console.log(this.state.cinemaList);
        //     new BetterScroll('.list_content' )
        // })
    }
    getCinemaList(){    // 使用了setState render函数都会重新执行
        console.log('搜索的内容',this.state.searchText);
        let val = this.state.searchText
        return this.state.cinemaList.filter(item =>item.name.toUpperCase().includes(val.toUpperCase()) ||
            item.address.toUpperCase().includes(val.toUpperCase()))
    }
}
