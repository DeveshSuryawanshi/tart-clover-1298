import React from 'react';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useSelector } from 'react-redux';

interface User {
  email: string;
  password: string;
  username: string;
  id: number;
  image: string;
}

interface UserCartProps {
  el: User;
  setUserData: (callback: (prevUserData: User[]) => User[]) => void;

}

const UserCart = ({ el, setUserData }: UserCartProps) => {
  const { id, username, email, password, image } = el;
  const toast = useToast();
  const isAdmin = useSelector((store:any) => store.auth.isAdmin);
  const handleDelete = () => {
    axios
      .delete(`https://cw-project-rct101.onrender.com/users/${id}`)
      .then((response) => {
        toast({
          title: 'Account deleted.',
          description: "We've deleted the user account.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });

        // Reload the user page after successful deletion
        setUserData((prevUserData: User[]) => prevUserData.filter((el) => el.id !== id));
      })
      .catch((error) => {
        toast({
          title: 'Error deleting account.',
          description: 'An error occurred while deleting the user account.',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <div>
      <Card maxW='sm'>
        <CardBody>
          <Image src={image} alt={username} borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{username}</Heading>
            <Text color='blue.600'>Email: {email}</Text>
            <Text color='blue.600' size='md'>
              Password: {password}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          {isAdmin&&<ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue' onClick={handleDelete}>
              Delete
            </Button>
          </ButtonGroup>}
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserCart;
