import React,{useState} from 'react'
import store from '../redux/store'
export default function Cinemas(props) {
  console.log(store.getState(),'store.getState()');
  const [cityName] = useState(store.getState().CityReducer.cityName)
  return (
    <div>
      <p onClick={()=> {
        props.history.push('/city')
      }}>{cityName}</p>
      Cinemas
    </div>
  )
}
