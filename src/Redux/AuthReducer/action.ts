import axios from 'axios';
import { Dispatch } from 'redux';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionType';

export const login = (dispatch: Dispatch, email: string, password: string) => {
  dispatch({ type: LOGIN_REQUEST });
  
  axios.get('https://cw-project-rct101.onrender.com/users')
    .then((res) => {
      if (res.data.some((el: { email: string, password: string }) => el.email === email && el.password === password)) {
        dispatch({ type: LOGIN_SUCCESS });
      }
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
    });
};
