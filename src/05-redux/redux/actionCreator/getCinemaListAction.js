import axios from 'axios'
// redux-thunk风格
// function getCinemaListAction() {
//     return (dispatch)=>{
//         axios.get('/ajax/moreCinemas?movieId=0&day=2022-10-03&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1664783060663&cityId=10&lat=52.3&lng=5.45&optimus_uuid=B1361F7042ED11EDB8A03B9FE0681B6371986642F560488F98E265DBA9EF8A88&optimus_risk_level=71&optimus_code=10')
//         .then(res => {
//             console.log(res,'resss');
//             dispatch({
//                 type: "change-list",
//                 value: res.data.cinemas.cinemas
//             })
//         })
//     }
// }

// redux-promise风格
function getCinemaListAction() {
    return axios.get('/ajax/moreCinemas?movieId=0&day=2022-10-03&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1664783060663&cityId=10&lat=52.3&lng=5.45&optimus_uuid=B1361F7042ED11EDB8A03B9FE0681B6371986642F560488F98E265DBA9EF8A88&optimus_risk_level=71&optimus_code=10')
        .then(res => {
            console.log(res,'resss');
            return{
                type: "change-list",
                value: res.data.cinemas.cinemas
            }
        })
}

export default getCinemaListAction