import React,{useState,useEffect} from 'react'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction';
import store from '../redux/store'
export default function Cinemas(props) {
  console.log(store.getState(),'store.getState()');
  const [cityName] = useState(store.getState().CityReducer.cityName)
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
  
  return (
    <div>
      <div style={{height:30}}>
        <p style={{float:'left'}} onClick={()=> {
          props.history.push('/city')
        }}>{cityName}</p>

        <p style={{float:'right'}} onClick={()=> {
          props.history.push('/cinemas/search')
        }}>搜索</p>
      </div>
      
      <div style={{paddingBottom:30}}>
        {cinemaList.map(item => 
          <dl key={item.id} style={{marginBottom:15}}>
            <dt>{item.nm}</dt>
            <dd style={{fontSize:'12px',color:'#3a3a3a'}}>{item.addr}</dd>
          </dl>
        )}
      </div>
    </div>
  )
}
