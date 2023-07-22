import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./AuthReducer/reducer";
import blogReducer from './BlogReducer/reducer';


const rootReducer = combineReducers({
    authReducer,
    blog: blogReducer,

});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


export default store;