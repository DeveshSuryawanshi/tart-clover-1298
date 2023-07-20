import React, { useState } from 'react';
import styles from './Login.module.css';
import backgroundImage from '../image/login.jpg';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { login } from '../../Redux/AuthReducer/action';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(dispatch, email, password);
  };

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
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className={styles["login-input"]}
            value={password}
            onChange={handleInputChange}
          />
          <br />
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const details = jwt_decode(credentialResponse.credential as string);
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
          <br />
          <button type="submit" className={styles["login-button"]}>
            LOGIN TO MY ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
};
