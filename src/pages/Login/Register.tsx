import React, { useState,useEffect } from 'react';
import styles from './Login.module.css';
import backgroundImage from '../image/login.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { upDate } from '../../Redux/AuthReducer/action';
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      if (name === 'email') {
        setEmail(value);
      } else if (name === 'password') {
        setPassword(value);
      }
      else{
        setUsername(value)
      }
    };
    const toast = useToast()
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const newUser={
            email,
            password,
            username,
            image:"https://acdsinc.org/wp-content/uploads/2015/12/dummy-profile-pic.png"
        }
upDate(dispatch,newUser).then(()=>{

    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
      });

navigate("/login")
})

    }
  return (
    <div className={styles["login-page"]}>
    <div className={styles["background-image"]} style={{ backgroundImage: `url(${backgroundImage})` }} />
    <div className={styles["login-form-container"]}>
      <h2 className={styles["login-title"]}>I am a returning user.</h2>
      <h2 className={styles["login-subtitle"]}>Please enter your login details below.</h2>

      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          name="email"
          id="email"
          className={styles["login-input"]}
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          className={styles["login-input"]}
          value={password}
          onChange={handleInputChange}
        />
      
      <label htmlFor="username">User Nmae:</label>
        <input
          type="text"
          name="username"
          id="username"
          className={styles["login-input"]}
          value={username}
          onChange={handleInputChange}
        />
   <button className={styles["login-button"]} >Submit</button>
    </form>
     

  </div>
  </div>
)
}

export default Register
