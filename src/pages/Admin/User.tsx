import axios from 'axios';
import  { useEffect, useState } from 'react';
import UserCart from './UserCart';
import { Grid, GridItem,Heading,  useBreakpointValue } from '@chakra-ui/react';


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

  const gridColumnTemplate= useBreakpointValue({
    base: "repeat(1, 1fr)", // 0-30em (480px)
    sm: "repeat(2, 1fr)", // 30em-48em (480px - 768px)
    md: "repeat(3, 1fr)", // 48em-62em (768px - 992px)
    lg: "repeat(3, 1fr)", // 62em-80em (992px - 1280px)
    xl: "repeat(4, 1fr)", // 80em+ (1280px+)
  }) || "repeat(2, 1fr)"; 
  return (
    <>
     <Heading size='md'>Total user : {userData.length}</Heading>
   <br />
   <Grid  templateColumns={gridColumnTemplate}
      gap={3}
      width="100%"
      padding="0 10px"
      justifyContent="space-between">
  {userData?.map((el: User) => (
    <GridItem style={{ width: '100%' }} key={el.id}>
      <UserCart el={el} setUserData={setUserData} />
    </GridItem>
  ))}
</Grid>

    </>
  );
};

export default UserPage;
