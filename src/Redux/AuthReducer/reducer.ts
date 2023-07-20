import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType";

interface Data {
  isAuth: boolean;
  isLoading: boolean;
  isError: boolean;
}

const initialState: Data = {
  isAuth: false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
