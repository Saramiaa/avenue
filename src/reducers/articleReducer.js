import {ADD_PRODUCT, DELETE_PRODUCT} from '../actions/action-types';

const initialState = {
	basket: []
}

export default function numberReducer(state = initialState, action) {
	switch(action.type) {

		case ADD_PRODUCT:
			return {
				...state,
				basket: action.payload
			}

		case DELETE_PRODUCT:
			return {
			...state,
			basket: action.payload
		}


		default:
			return state;
	}
}
