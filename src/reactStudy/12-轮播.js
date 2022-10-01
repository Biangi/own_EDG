import React, { Component } from 'react'
import Swiper,{ Navigation, Pagination } from 'swiper'
import 'swiper/css/bundle'
Swiper.use([Navigation,Pagination])
export default class App extends Component {
    state = {
        list:[]
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                list:['Slide 1','Slide 2','Slide 3']
            })
        }, 1000);
    }
    render() { 
        return ( 
        <div>
            <ZSwiper loop={true}>
                {/* <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div> */}
                {
                    this.state.list.map(item => 
                        <SwoperItem key={item}>{item}</SwoperItem>
                    )
                }
            </ZSwiper>
        </div>
        )
    }
}

class ZSwiper extends Component {
    
    componentDidMount() { // 组件创建完毕执行
        setTimeout(() => {
            this.setState({
                list:[]
            })
        },1000)
    }
    componentDidUpdate(){   // dom更新完毕执行
        new Swiper(".swiper",{
            // direction: 'vertical', // 垂直切换选项
            // loop: true, // 循环模式选项
            
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            loop:this.props.loop
        })
    }
    render() {
        return (
            <div>
                <div className="swiper" style={{height:"200px",background:"#f6c4c4"}}>
                    <div className="swiper-wrapper">
                        {
                            // this.state.list.map(item => 
                            //     <div className="swiper-slide" key={item}>{item}</div>
                            // )
                        }
                        { this.props.children }
                    </div>
                    <div className="swiper-pagination"></div>
                    
                </div>
            </div>
        );
    }
}


class SwoperItem extends Component {
  render() {
    return (
        <div className="swiper-slide">{this.props.children}</div>
    )
  }
}


