import React, { useState,useEffect } from 'react';
import styles from './Login.module.css';
import backgroundImage from '../image/login.jpg';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { login } from '../../Redux/AuthReducer/action';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '../../Redux/Store'
import { LOGIN_SUCCESS, LOGIN_SUCCESS_LOGOUT } from '../../Redux/actionType';
import { googleLogout } from '@react-oauth/google';
import { Navigate, useNavigate } from 'react-router-dom';

import { Card, Avatar, CardBody, CardFooter ,useDisclosure,Stack,Heading,Text,Divider,ButtonGroup,Button} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,FormLabel,Input
} from '@chakra-ui/react'
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)


  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  // interface Data {
  //   isAuth: boolean;
  //   isLoading: boolean;
  //   isError: boolean;
  // }
const navigate=useNavigate()
const toast = useToast()
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const { userData } = useSelector((state: RootState) => state.auth);
  const { isAdmin } = useSelector((state: RootState) => state.auth);

  const [url,setUrl]=useState("")
  // const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   

    try {
      await login(dispatch, email, password);
      if (isAuth) {
        navigate('/');}
        
   
    } catch (error) {
      console.error('Error during login:', error);
      toast({
        title: 'Wrong Credentials..',
        description: 'Check your Email or Password',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }

 
  };

  
  // console.log(isAuth)
  // console.log(userData)
  // console.log(isAdmin,"admin")
  const handleLogout=()=>{
    googleLogout();
    dispatch({type:LOGIN_SUCCESS_LOGOUT})
    
  }

    // if (isAuth) {
    //   navigate('/');
    // }
  
const handleRegister=()=>{
  navigate("/register")
}
const handleSave = () => {
  const data = {
    image: url,
  };

  axios
    .patch(`https://cw-project-rct101.onrender.com/users/${userData.id}`, data)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      onClose(); // Close the modal on successful patch
      toast({
        title: "Profile Image Updated",
        description: "Your profile image has been updated successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    })
    .catch((error) => {
      console.error("Error updating image:", error);
      toast({
        title: "Error",
        description: "An error occurred while updating your profile image.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    });
};

  return (
    <div className={styles["login-page"]}>
      <div className={styles["background-image"]} style={{ backgroundImage: `url(${backgroundImage})` }} />
      {!isAuth&&<div className={styles["login-form-container"]}>
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
        
        <GoogleLogin
            onSuccess={(credentialResponse) => {
              const details:any = jwt_decode(credentialResponse.credential as string);
              // console.log(credentialResponse);
              const email=details.email
              const username=details.name
              const image=details.picture

              console.log(details)
              dispatch({type:LOGIN_SUCCESS,payload:{email,username,image}})
              navigate("/")
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
          
         
          {!isAuth&&<button type="submit" className={styles["login-button"]}>
            LOGIN TO MY ACCOUNT
          </button>}
        
         <button className={styles["login-button"]} onClick={handleRegister}>REGISTER</button>
        </form>


      </div>}

      {isAuth&&   <div> 

      <Card maxW='sm'marginRight={"30px"} >
  <CardBody>
  <Avatar size='2xl' name={userData.username} src={userData.image} />{' '}
   
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{userData.username}</Heading>
      
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' onClick={handleLogout}>
       Logout
      </Button>
      <Button variant='solid' colorScheme='blue' onClick={onOpen}>
        Edit Profile
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
<Modal
         initialFocusRef={initialRef}
         finalFocusRef={finalRef}
         isOpen={isOpen}
         onClose={onClose}
        >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edite your Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Image URL</FormLabel>
              <Input ref={initialRef} placeholder='Image URL' onChange={(e)=>{setUrl(e.target.value)}} />
            </FormControl>

           
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>
      }
    </div>
  );
};
