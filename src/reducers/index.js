import { combineReducers } from "redux";
import ArticleReducer from './articleReducer';


const rootReducer = combineReducers({
    basket: ArticleReducer
});

export default rootReducer;
