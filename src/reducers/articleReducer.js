import {ADD_ONE} from '../actions/action-types';

const initialState = {
	article: []
}

export default function articleReducer(state = initialState, action) {
	switch(action.type) {

		case ADD_ONE:
			console.log('action récupéré reducer', action)
			return {
				// ...state,
				// number: action.payload
			}

		default:
			return state;
	}
}
