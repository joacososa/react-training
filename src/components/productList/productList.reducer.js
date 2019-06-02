import {PRODUCT_LIST_IS_LOADING, PRODUCT_LIST_HAS_ERRORED, PRODUCT_LIST_FETCH_DATA_SUCCESS} from './productList.actions';

const defaultState = {isLoading : true, data: [], error : false};

export function productList(state = defaultState, action) {
    switch (action.type) {
        case PRODUCT_LIST_IS_LOADING:
            return {isLoading: true, data: state.data, error: false};
        case PRODUCT_LIST_FETCH_DATA_SUCCESS:
            return {isLoading: false, data: action.data, error: false};
        case PRODUCT_LIST_HAS_ERRORED:
            return {isLoading: false, data: state.data, error: action.error};
        default:
            return state;
    }
}
