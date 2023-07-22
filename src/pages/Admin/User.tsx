import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCart from './UserCart';
import { Grid, GridItem,Heading } from '@chakra-ui/react';

// Define the 'user' interface at the top level of the file
interface User {
  email: string;
  password: string;
  username: string;
  id: number;
  image: string;
}

const UserPage = () => {
  const [userData, setUserData] = useState<User[]>([]); // Use the 'User' interface for the state

  useEffect(() => {
    axios('https://cw-project-rct101.onrender.com/users').then((res) => {
      setUserData(res.data);
    });
  }, []);

  return (
    <>
     <Heading size='md'>Total user : {userData.length}</Heading>
   <br />
      <Grid templateColumns='repeat(5, 1fr)' gap={3}>
        {userData?.map((el: User) => (
          <GridItem w='100%' key={el.id}>
            <UserCart el={el} setUserData={setUserData} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default UserPage;
