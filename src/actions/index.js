import {ADD_PRODUCT, DELETE_PRODUCT} from './action-types'

export function AddProduct(products) {

    return function(dispatch) {
        dispatch({
				type: ADD_PRODUCT,
				payload: products
			});


    }
}

export function deleteProduct(products) {

    return function(dispatch) {
        dispatch({
				type: DELETE_PRODUCT,
				payload: products
			});


    }
}
