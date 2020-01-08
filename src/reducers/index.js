import { combineReducers } from "redux";
import ArticleReducer from './articleReducer';


const rootReducer = combineReducers({
    article: ArticleReducer
});

export default rootReducer;
