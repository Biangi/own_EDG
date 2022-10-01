import React,{useRef,useState,} from 'react'

export default function App() {
    const myref = useRef(0)
    const [name, setname] = useState(0)
    const handleC = () => {
        setname(name+1)
        myref.current++
        console.log(myref.current,'myref.current.value');
    }
    // react中保存值的方法 useState、useRef

  return (
    <div>
        {/* <input ref={myref} value={myref.current}></input> */}
        {name} -- {myref.current}
        <button onClick={handleC}>获取</button>
    </div>
  )
}
