GLOBAL.self = GLOBAL;

import axios from 'axios';
import { url, API_KEY } from './../Utils/Constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';


export default function FetchCoinData() {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA})
        return axios.get(url, {
            quotes: {
                start: 1,
                limit: 5000,
                convert: 'USD'
            },
            headers: {
                'Accept': 'application/json',
                'Accept-Encoding': 'deflate, gzip',
                'X-CMC_PRO_API_KEY': API_KEY
            },
            json: true,
            gzip: true
            }).then(res => {
                dispatch({
                    type: FETCHING_COIN_DATA_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCHING_COIN_DATA_FAIL,
                    payload: err
                })
            });
        }
        // return fetch(url, {
        //     headers: {
        //         'X-CMC_PRO_API_KEY': API_KEY
        //     }
        // })
        // .then(response => { return response.json() })
        // .then(data => {
        //     dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: data})
        // })
        // .catch(error => {
        //     dispatch({
        //         type: FETCHING_COIN_DATA_ERROR,
        //         payload: error
        //     })
        // })
        
}