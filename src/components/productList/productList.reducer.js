import {PRODUCT_LIST_IS_LOADING,
        PRODUCT_LIST_HAS_ERRORED,
        PRODUCT_LIST_FETCH_DATA_SUCCESS,
        PRODUCT_SAVE_IS_LOADING,
        PRODUCT_SAVE_HAS_ERRORED,
        PRODUCT_SAVE_SUCCESS
    } from './productList.actions';

const defaultState = {isLoading : true, data: [], error : false, saveSuccess: false, saveLoading:false, saveError: false};

export function productList(state = defaultState, action) {
    switch (action.type) {
        case PRODUCT_LIST_IS_LOADING:
            return {...state, isLoading: true, data: state.data, error: false, saveSuccess: false};
        case PRODUCT_LIST_FETCH_DATA_SUCCESS:
            return {...state, isLoading: false, data: action.data, error: false, saveSuccess: false};
        case PRODUCT_LIST_HAS_ERRORED:
            return {...state, isLoading: false, data: state.data, error: action.error, saveSuccess: false};
        case PRODUCT_SAVE_IS_LOADING:
            return {...state, saveLoading: true, saveSuccess: false, saveError: false};
        case PRODUCT_SAVE_SUCCESS:
            return { ...state, saveSuccess: true, saveLoading: false, saveError: false};
        case PRODUCT_SAVE_HAS_ERRORED:
            return {...state, saveLoading: false, saveError: action.error, saveSuccess: false};
        default:
            return state;
    }
}
