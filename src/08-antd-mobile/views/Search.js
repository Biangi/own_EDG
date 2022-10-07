import React, { useEffect, useMemo, useRef, useState } from 'react'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import store from '../redux/store'
export default function Search() {
    const mytextRef = useRef()
    const [mytext,setmytext] = useState('')
    const [cinemaList,setCinemaList] = useState(store.getState().CinemasListReducer.list)
    useEffect(() => {
        if (store.getState().CinemasListReducer.list.length === 0) {
            store.dispatch(getCinemaListAction())
        } else {
            console.log(store,'store缓存');
        }
        var unsubscribe = store.subscribe(() =>{
            console.log(store.getState().CinemasListReducer.list,'------store缓存');
            let list = store.getState().CinemasListReducer.list
            setCinemaList(list)
        })
        return () => {  // 组件销毁时取消订阅，避免重复订阅
            unsubscribe()
        }
    }, [])
    const getCinemaList = useMemo(() => cinemaList.filter(item => item.nm.toUpperCase().includes(mytext.toUpperCase()) || item.addr.toUpperCase().includes(mytext.toUpperCase())
    ), [cinemaList,mytext])


    const inpChange = (val) => {
        let value = mytextRef.current.value
        console.log(value.toUpperCase(),'lllll');
        setmytext(value)
    }
  return (
    <div>
        <input ref={mytextRef} onChange={inpChange} style={{marginBottom:10}}></input>
        <div style={{paddingBottom:30}}>
            {getCinemaList.map(item => 
            <dl key={item.id} style={{marginBottom:15}}>
                <dt>{item.nm}</dt>
                <dd style={{fontSize:'12px',color:'#3a3a3a'}}>{item.addr}</dd>
            </dl>
            )}
        </div>
    </div>
  )
}
