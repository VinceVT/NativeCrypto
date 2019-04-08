import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_ERROR
} from './../Utils/ActionTypes';

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCHING_COIN_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null
            })
        case FETCHING_COIN_DATA_SUCCESS:
            return Object.assign(state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            });

        case FETCHING_COIN_DATA_ERROR:
            return Object.assign(state, {
                isFetching: false,
                data: null,
                hasError: true,
                errorMessage: action.payload
            });
    
        default:
            return state;
    }
}