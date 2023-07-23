import { LOGIN_ADMIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_SUCCESS_LOGOUT } from "../actionType";
import { AuthState, data } from "./types"; // Import the AuthState type from the types file.

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  isAdmin:false,
  userData:{email:"",username:"",image:"https://acdsinc.org/wp-content/uploads/2015/12/dummy-profile-pic.png"}
};

export const reducer = (state = initialState, action: { type: string,payload:data }) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true ,userData: action.payload};
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
      case LOGIN_SUCCESS_LOGOUT:
      return { ...state, isAuth: false, isAdmin:false,userData:{email:"",username:"",image:""}};
      case LOGIN_ADMIN_SUCCESS:
      return {...state,isAdmin:true}

    default:
      return state;
  }
};
