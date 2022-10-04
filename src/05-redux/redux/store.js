import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import CityReducer from "./reducers/CityReducer";
import TabbarReducer from "./reducers/TabbarReducer";
import CinemasListReducer from "./reducers/CinemasListReducer";
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise';
// const reducer = (prevState={
//     show:true,
//     cityName:'北京'
// },action)=>{
//     console.log(prevState,action,'store');
//     let newState = {...prevState}
//     switch (action.type) {
//         case 'hide-tabbar':
//             newState.show = false
//             return newState;
//         case 'show-tabbar':
//             newState.show = true
//             return newState;

//         case 'change-city':
//             newState.show = true
//             return newState;
//         default:
//             return prevState
//     }
//     // return prevState
// }
const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemasListReducer
})
const store = createStore(reducer,applyMiddleware(reduxThunk,reduxPromise))

// function myCreateStore(reducer) {   // 手写Redux
//     var list = []
//     var state = reducer(undefined,{})

//     function subscribe(callBack) {
//         list.push(callBack)
//     }

//     function dispatch(action) {   // 发布行为时 触发reducer
//         state = reducer(state,action)   // 确保每次调用reducer时state都是最新的
//         for (const i in list) {
//             list[i] && list[i]()
//         }
//     }

//     function getState() {
//         return state    // 返回最新的修改过的reducer，当调用getState时能获取到最新的state中的状态
//     }
//     return {
//         subscribe,
//         dispatch,
//         getState
//     }
// }

export default store