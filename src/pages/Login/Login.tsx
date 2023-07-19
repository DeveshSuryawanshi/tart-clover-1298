import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
export const Login = () => {
  const handleGoogleLoginSuccess = (response: any) => {
    console.log(response);
  };

  const handleGoogleLoginFailure = (error: any) => {
    console.log('Login Failed:', error);
  };

  return (
    <div>
      <h2>I am a returning user.</h2>
      <h2>Please enter your login details below.</h2>

      <form>
        <label htmlFor="email">Email address:</label>
        <input type="email" name="email" id="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        <br />
        <GoogleLogin
  onSuccess={credentialResponse => {
    const details=jwt_decode(credentialResponse.credential as string);
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
     

        <button type="submit">LOGIN TO MY ACCOUNT</button>
      </form>
    </div>
  );
};
