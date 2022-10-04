const CinemasListReducer = (prevState={
    list:[]
},action)=>{
    // console.log(prevState,action,'store');
    let newState = {...prevState}
    switch (action.type) {
        case 'change-list':
            newState.list = action.value
            return newState;
        default:
            return prevState
    }
}
export default CinemasListReducer