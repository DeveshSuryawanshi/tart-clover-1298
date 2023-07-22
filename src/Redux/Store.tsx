import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import { reducer as authReducer } from "./AuthReducer/reducer";
import blogReducer from './BlogReducer/reducer';
import { StateType } from 'typesafe-actions';
const rootReducer = combineReducers({
  blog: blogReducer,
  auth: authReducer,
})
export type RootState = StateType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


