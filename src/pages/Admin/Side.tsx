import React from 'react';
import { Button, Stack, StackDivider, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface SideProps {
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
  setBlog: React.Dispatch<React.SetStateAction<boolean>>;
  isBlog:boolean;
}

const Side = ({ setUser, setBlog ,isBlog}: SideProps) => {
const navigate=useNavigate()
  const handleBlog=()=>{
    setBlog(true);
    setUser(false)
  }
  const handleUser=()=>{
    setUser(true);
    setBlog(false);
  }
  const handleForm=()=>[
    navigate("/blogForm")
  ]
  return (
    <div style={{position:"sticky", top:"75px"}}>
      <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='center'>
        <Button colorScheme='blue' onClick={handleUser}>
          User Data
        </Button>
        <Button colorScheme='teal' onClick={handleBlog}>
          Blog Data
        </Button>
{isBlog&&<Button onClick={handleForm}>Add Post</Button>}
      </VStack>
    </div>
  );
};

export default Side;
