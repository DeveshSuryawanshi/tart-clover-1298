import axios from 'axios';
import { Dispatch } from 'redux';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionType';

export const login = (dispatch: Dispatch, email: string, password: string) => {
  dispatch({ type: LOGIN_REQUEST });

  axios.get('https://cw-project-rct101.onrender.com/users')
    .then((res) => {
      const user = res.data.find((el: { email: string; password: string }) => el.email === email && el.password === password);

      if (user) {
        dispatch({ type: LOGIN_SUCCESS, payload: { email: email, username:user.username, image: user.image } });
      } else {
        dispatch({ type: LOGIN_FAILURE });
      }
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
    });
};
