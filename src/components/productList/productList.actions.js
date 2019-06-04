export const PRODUCT_LIST_IS_LOADING = 'PRODUCT_LIST_IS_LOADING';
export const PRODUCT_LIST_HAS_ERRORED = 'PRODUCT_LIST_HAS_ERRORED';
export const PRODUCT_LIST_FETCH_DATA_SUCCESS = 'PRODUCT_LIST_FETCH_DATA_SUCCESS';
export const PRODUCT_SAVE_IS_LOADING = 'PRODUCT_SAVE_IS_LOADING';
export const PRODUCT_SAVE_HAS_ERRORED = 'PRODUCT_SAVE_HAS_ERRORED';
export const PRODUCT_SAVE_SUCCESS = 'PRODUCT_SAVE_SUCCESS';

export function productListHasErrored(error) {
    return {
        type: PRODUCT_LIST_HAS_ERRORED,
        error
    };
}

export function productListIsLoading() {
    return {
        type: PRODUCT_LIST_IS_LOADING
    };
}

export function productListFetchDataSuccess(data) {
    return {
        type: PRODUCT_LIST_FETCH_DATA_SUCCESS,
        data
    };
}

export function productSaveHasErrored(error) {
    return {
        type: PRODUCT_SAVE_HAS_ERRORED,
        error
    };
}

export function productSaveIsLoading() {
    return {
        type: PRODUCT_SAVE_IS_LOADING
    };
}

export function productSaveSuccess() {
    return {
        type: PRODUCT_SAVE_SUCCESS,
    };
}

export function productSave(url, product) {
    return (dispatch) => {
        dispatch(productSaveIsLoading());

        fetch(url , {
            method: 'post',
            body: JSON.stringify(product),
            headers:{
            'Content-Type': 'application/json'
            }
           })
            .then((response) => { 
                    dispatch(productSaveSuccess());
                }
            )
            .catch((error) => dispatch(productSaveHasErrored(error)));
    };
}

export function productListFetchData(url, params) {
    return (dispatch) => {
        dispatch(productListIsLoading());

        fetch(url , {
            method: 'get',
           })
            .then((response) => response.json())
            .then((productList) => { 
                    dispatch(productListFetchDataSuccess(productList))
                }
            )
            .catch((error) => dispatch(productListHasErrored(error)));
    };
}
