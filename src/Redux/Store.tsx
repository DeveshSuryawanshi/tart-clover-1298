import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./AuthReducer/reducer";
import blogReducer from "../pages/Blogs/store/reducers/blogReducer";


const rootReducer = combineReducers({

    blog: blogReducer,
    authReducer

});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;