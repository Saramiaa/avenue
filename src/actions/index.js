import {ADD_PRODUCT} from './action-types'

export function AddProduct(products) {

    return function(dispatch) {
        dispatch({
				type: ADD_PRODUCT,
				payload: products
			});


    }
}
