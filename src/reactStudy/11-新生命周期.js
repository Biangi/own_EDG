import React, { PureComponent,  } from 'react'
// import React, {  Component } from 'react'
export default class App extends PureComponent {
    state = {
        numList:[1,2,3,4,5,6,7,8,9]
    }
    divRef = React.createRef()
    getSnapshotBeforeUpdate(){// 必须有return值，componentDidUpdate()的第三个形参接受
        // 获取容器高度
        document.getElementById("")
        let c = this.divRef.current.scrollHeight
        console.log(c);
        return c
    }

    componentDidUpdate(prevProps,prevState,value){  // 
        let y = this.divRef.current.scrollHeight
        let divH = y-value
        console.log(y,value,'y-value');
        console.log(divH,'相差高度');
        console.log(this.divRef.current.scrollTop,'this.divRef.current.scrollTop');
        this.divRef.current.scrollTop += this.divRef.current.scrollHeight-value
    }



    render() {
        console.log("render");
        return (
        <div>
            <button onClick={() => {
                this.setState({
                    numList:[...[11,12,13,14,15,16,17,18,19],...this.state.numList]
                })
            }}>来邮件</button>
            <h2>邮箱</h2>
            <div style={{height:'200px',overflow:'auto'}} id="box" ref={this.divRef} >
                <ul style={{background:"gray"}}>
                    {
                        this.state.numList.map(item => 
                            <li key={item} style={{height:'50px'}}> {item}</li>
                        )
                    }
                </ul>
            </div>
        </div>
        )
    }
}
