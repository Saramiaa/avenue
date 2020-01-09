import { combineReducers } from "redux";
import ArticleReducer from './articleReducer';


const rootReducer = combineReducers({
    number: ArticleReducer
});

export default rootReducer;
