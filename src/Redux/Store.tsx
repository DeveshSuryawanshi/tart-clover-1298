import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import { reducer as authReducer } from "./AuthReducer/reducer";
import blogReducer from "../pages/Blogs/store/reducers/blogReducer";

const rootReducer = combineReducers({
  blog: blogReducer,
authReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


