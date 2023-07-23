import axios from 'axios';
import { Dispatch } from 'redux';
import { LOGIN_ADMIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionType';


export const login = async (dispatch: Dispatch, email: string, password: string): Promise<void> => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const res = await axios.get('https://cw-project-rct101.onrender.com/users');
    const user = res.data.find((el: { email: string; password: string }) => el.email === email && el.password === password);

    if (user) {
      dispatch({ type: LOGIN_SUCCESS, payload: { email: email, username: user.username, image: user.image ,id:user.id} });
    } else {
      // Reject the promise if the credentials don't match
      dispatch({ type: LOGIN_FAILURE });
      return Promise.reject(new Error('Wrong Credentials'));
    }
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE });
    return Promise.reject(err);
  }

  axios.get(`https://cw-project-rct101.onrender.com/admin`).then((res)=>{

    const user = res.data.find((el: { email: string; password: string }) => el.email === email && el.password === password);

    if(user){

      dispatch({type:LOGIN_ADMIN_SUCCESS})
    }
  })
};
interface user{
  email: string;
  password: string;
  username: string;
  image:string;
}

export const upDate= async (dispatc:Dispatch,newUser:user)=>{


  let res= await axios.post(`https://cw-project-rct101.onrender.com/users`,newUser)
  return res.data
}



export const   handleDelete = async(id:number) => {
 let res= axios
    .delete(`https://cw-project-rct101.onrender.com/users/${id}`)

    return res
   
};