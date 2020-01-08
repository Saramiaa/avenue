import {ADD_ONE} from './action-types';

export const addOne = (newArticle)=>{
    return function(dispatch) {
        dispatch({
			type: ADD_ONE,
			payload: newArticle
		});
    }
}
