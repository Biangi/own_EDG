import React,{ useEffect} from 'react'
import { connect } from 'react-redux';
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction';
// import store from '../redux/store'

function Cinemas(props) {
  let {cityName,cinemaList,getCinemaListAction} = props
  useEffect(() => {
    if (cinemaList.length === 0) {
      getCinemaListAction()
    } else {
      console.log( 'store缓存');
    }
    return () => {  // 组件销毁时取消订阅，避免重复订阅
    }
  }, [cityName,cinemaList,getCinemaListAction])
  
  return (
    <div>
      <div style={{height:30}}>
        <p style={{float:'left'}} onClick={()=> {
          props.history.push('/city')
        }}>{props.cityName}</p>

        <p style={{float:'right'}} onClick={()=> {
          props.history.push('/cinemas/search')
        }}>搜索</p>
      </div>
      
      <div style={{paddingBottom:30}}>
        {props.cinemaList.map(item => 
          <dl key={item.id} style={{marginBottom:15}}>
            <dt>{item.nm}</dt>
            <dd style={{fontSize:'12px',color:'#3a3a3a'}}>{item.addr}</dd>
          </dl>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {  // 状态转为cinemas的props
  return {
    cityName: state.CityReducer.cityName,
    cinemaList: state.CinemasListReducer.list,
  }
}

const mapdispatchToProps = {  // dispatch方法转为cinemas的props
  getCinemaListAction
}
export default connect(mapStateToProps,mapdispatchToProps)(Cinemas)
