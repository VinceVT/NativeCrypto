
import axios from 'axios';
import { url, API_KEY } from './../Utils/Constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';


export default FetchCoinData = () => {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA})
        // return axios.get(url, {
        //     qs: {
        //         start: 1,
        //         limit: 10,
        //         convert: 'USD'
        //     },
        //     headers: {
        //         'Accept': 'application/json',
        //         'Accept-Encoding': 'deflate, gzip',
        //         'X-CMC_PRO_API_KEY': API_KEY
        //     },
        //     json:true,
        //     }).then(res => {
        //         dispatch({
        //             type: FETCHING_COIN_DATA_SUCCESS,
        //             payload: res.data.json()
        //         })
        //     })
        //     .catch(err => {
        //         dispatch({
        //             type: FETCHING_COIN_DATA_FAIL,
        //             payload: err
        //         })
        //     });
        // }
        return fetch(url, {
            qs: {
                start: 1,
                limit: 10,
                convert: 'USD'
            },
            headers: {
                'Accept': 'application/json',
                'X-CMC_PRO_API_KEY': API_KEY
            },
        })
        .then(response => { return response.json() })
        .then(data => {
            dispatch({
                type: FETCHING_COIN_DATA_SUCCESS,
                payload: data.data.map((d, name) => Object.assign({ key: name}, d) )
            });
        })
        .catch(error => {
            dispatch({
                type: FETCHING_COIN_DATA_FAIL,
                payload: error
            })
        })
    }
}