const CityReducer = (prevState={
    cityName:'北京'
},action)=>{
    // console.log(prevState,action,'store');
    let newState = {...prevState}
    switch (action.type) {
        case 'change-city':
            newState.cityName = action.value
            return newState;
        default:
            return prevState
    }
}
export default CityReducer