import React, { useState } from 'react'
import store from '../redux/store'
export default function City(props) {
    const [list] = useState(['北京','上海','广州','深圳','石家庄','江苏',])
    const changeCity = (row)=>{
        store.dispatch({
            type:'change-city',
            value:row
        })
        console.log(props.history,'changeCity');
        // props.history.push('/cinemas')
        props.history.goBack()
    }
  return (
    <div>
        City
        <ul>
            {list.map(item => 
                <li key={item} onClick={()=>changeCity(item)}>{item}</li>
            )}
        </ul>
    </div>
  )
}
