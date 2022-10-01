
import React from 'react'

// 函数式组件 
export default function sideBar(props) {
    console.log(props,'从父组件接受的参数');
    let {bg} = props
    return (
        <div style={{background:bg}}>
            <ul>
                {/* {
                this.state.sideList.map(item => <li key={item.id}>{item.address}</li>)
            } */}
                <li >1</li>
                <li >1</li>
                <li >1</li>
                <li >1</li>
                <li >1</li>
                <li >1</li>
            </ul>
        </div>
    )
}


