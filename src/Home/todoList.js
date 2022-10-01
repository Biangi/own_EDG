import React, { Component } from 'react'

export default class todoList extends Component {
    state = {
        flag:true,
        arrList:[
            {
                id:'001',
                date: '2016-05-02',
                name: '王小虎1',
                address: '上海市普陀区金沙江路 1518 弄'
            }, 
            {
                id:'002',
                date: '2016-05-04',
                name: '王小虎2',
                address: '上海市普陀区金沙江路 1517 弄'
            }, 
            {
                id:'003',
                date: '2016-05-01',
                name: '王小虎3',
                address: '上海市普陀区金沙江路 1519 弄'
            },
        ],
        arr:['aa','bb','cc'],
        inpText:""
    }
    // inpText = React.createRef()
    render() {
        let newList = this.state.arrList.map((item,index) => 
        // 使用dangerouslySetInnerHTML属性的虚拟dom元素下级应该没有任何内容，注释也不行！！！
        <li key={item.id}>
            <input type="checkbox" onChange={()=>{}}></input>
            <span dangerouslySetInnerHTML={{__html:item.name}}></span> 
            <button onClick={ ()=>{ this.listDelete(index) } }>删除</button>
        </li>)
        // let newList = this.state.arr.map(item => <li key={item}><span>{item}</span> <button onClick={this.listDelete(item)}>删除</button></li>)
        return (
            <div>
                <h1>ToDoList ~</h1>
                <p>Virtual Dom</p>
                <ul>
                    {newList}
                </ul>
                {this.state.arrList.length===0?<p>暂无内容</p>:null}
                <input value={this.setState.inpText} onChange={(eve)=>{
                    this.setState({
                        inpText:eve.target.value
                    })
                }}></input>
                {/* <button onClick={this.setBtn}>{this.state.flag?'收藏':'取消收藏'}</button> */}
                <button onClick={this.neArrBtn}>添加</button>
            </div>
        )
    }
    setBtn = () => {
        this.setState({flag:!this.state.flag})
        if (this.state.flag) {
            console.log("点击了收藏");
        }else {
            console.log("点击了取消收藏");
        }
    }
    listDelete = (index) => {
        console.log('iiii',index);
        // 深拷贝.slice() 与 .concat()
        let arr = this.state.arrList.slice()
        arr.splice(index,1)
        this.setState({arrList:arr})
    }
    neArrBtn = () => {  // 添加
        console.log(this.setState.inpText);
        let obj = {
            id:Math.random()*10000,
            date: '2016-05-02',
            name: this.state.inpText,
            address: '上海市普陀区金沙江路 1518 弄'
        }
        let newListA = [...this.state.arrList]
        newListA.push(obj)
        this.setState(
            {
                arrList:newListA,
                inpText:""
            }
            
        )
        console.log(this.state.arrList);

    }
}
