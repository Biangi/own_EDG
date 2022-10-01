import React,{useReducer,useContext} from 'react'

const reducer = (prevState,action) => {
    console.log(prevState,'----',action);
    const newO = {...prevState}
    // switch (action.type) {
    //     case 'minus':
    //         newO.count--
    //         return newO
    //     case 'add':
    //         newO.count++
    //         return newO
    //     default:
    //         return prevState
    // }
    console.log(action.type,'action.type');
    switch (action.type) {
        case 'change-a':
            newO.a = action.value
            return newO;
        case 'change-b':
            newO.b = action.value
            return newO;
        default:
            return newO
    }
}

const intialState = {
    // count:0,
    a:'aaa',
    b:'bbb'
}
const GlobalContext = React.createContext()
export default function App() {
    const [state, dispatch] = useReducer(reducer,intialState)
    // console.log(state, dispatch,'state, dispatch');
    return (
        <GlobalContext.Provider value={
            {
                state,
                dispatch
            }
        }>
            <div>
                {/* <button onClick={() => {
                    dispatch({
                        type:"minus"
                    })
                }}>-</button>
                {state.count}
                <button onClick={() => {
                    dispatch({
                        type:"add"
                    })
                }}>+</button> */}
                <Child1></Child1>
                <Child2></Child2>
                <Child3></Child3>
            </div>
        </GlobalContext.Provider>
    )
}

function Child1(){
    const {dispatch} = useContext(GlobalContext)
    return <div style={{background:'blue'}}>
        <button onClick={() => {
            console.log("改变aa");
            dispatch({
                type:"change-a",
                value:"mmm"
            })
        }}>改变a</button>

        <button onClick={() => {
            console.log("改变bb");
            dispatch({
                type:"change-b",
                value:"rrr"
            })
        }}>改变b</button>
    </div>
}

function Child2() {
    const {state} = useContext(GlobalContext)
    return <div style={{background:'red'}}>
        child2--{state.a}
    </div>
}

function Child3() {
    const {state} = useContext(GlobalContext)
    return <div style={{background:'yellow'}}>
        child3--{state.b}
    </div>
}
