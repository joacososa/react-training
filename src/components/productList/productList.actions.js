export const PRODUCT_LIST_IS_LOADING = 'PRODUCT_LIST_IS_LOADING';
export const PRODUCT_LIST_HAS_ERRORED = 'PRODUCT_LIST_HAS_ERRORED';
export const PRODUCT_LIST_FETCH_DATA_SUCCESS = 'PRODUCT_LIST_FETCH_DATA_SUCCESS';

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
