import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import { reducer as authReducer } from "./AuthReducer/reducer";

// Define the root state type by creating an interface that includes the shape of your state.
 export interface RootState {
  auth: ReturnType<typeof authReducer>; 
// Use the 'auth' key for the authReducer state.
}

const rootReducer = combineReducers({
  auth: authReducer, // Use the 'auth' key for the authReducer state.
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
