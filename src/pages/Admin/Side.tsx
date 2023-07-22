import React from 'react';
import { Button, Stack, StackDivider, VStack } from '@chakra-ui/react';

interface SideProps {
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
  setBlog: React.Dispatch<React.SetStateAction<boolean>>;
}

const Side = ({ setUser, setBlog }: SideProps) => {

  const handleBlog=()=>{
    setBlog(true);
    setUser(false)
  }
  const handleUser=()=>{
    setUser(true);
    setBlog(false);
  }
  return (
    <div>
      <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='center'>
        <Button colorScheme='blue' onClick={handleUser}>
          User Data
        </Button>
        <Button colorScheme='teal' onClick={handleBlog}>
          Blog Data
        </Button>
      </VStack>
    </div>
  );
};

export default Side;
