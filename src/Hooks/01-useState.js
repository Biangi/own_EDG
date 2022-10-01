import React, { useState } from 'react'

export default function App() {
    const [list,setList] = useState([11,22,33,44,55])
    const [name,setName] = useState('')
    // console.log(name,'----',setName)
    const handleAdd = (eve) => {
        console.log(name,'vvv');
        setList([...list,name])
        setName('')
    }
    const handleChange = (eve)=>{
        setName(eve.target.value)
    }
    const handleRemove = (index)=>{
        console.log(index,'index');
        let newList = [...list]
        newList.splice(index,1)
        setList(newList)
    }
    return (
        <div>
            <input onChange={handleChange} value={name}></input>
            <ul>
                { list.map((item,index) => 
                    <li key={item}>{item}
                    
                    <button onClick={ () =>handleRemove(index)}>删除</button>
                    </li>

                )}
            </ul>
            { !list.length && <div> 暂无待办事项 </div> }
            <button onClick={ handleAdd }> click </button>
        </div>
    )
}
