import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Textarea,
  Center,
  Input,
  Button,
  
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    image: "",
    description: "",
    category: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const toast = useToast()
  const handleSubmit = () => {
    axios.post(`https://blogposts-rn01.onrender.com/blogPosts`,formData).then(()=>{
      toast({
        title: 'Blog  Add.',
        description: "We've added the post in blog page for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })

    })
    navigate("/admin")
  };

  return (
    <Center width={"50%"} margin={"auto"} padding={"10"} marginTop={10} marginBottom={5} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
      <FormControl isRequired>
        <FormLabel>Title</FormLabel>
        <Input name="title" placeholder='Title' onChange={handleInputChange} />
        <FormLabel>Date</FormLabel>
        <Input name="date" placeholder='Date of Updation' onChange={handleInputChange} />
        <FormLabel>Image</FormLabel>
        <Input name="image" placeholder='Image URL' onChange={handleInputChange} />
        <FormLabel>Category</FormLabel>
        <Input name="category" placeholder='Category (ex- Salary/IRP5)' onChange={handleInputChange} />
        <FormLabel>Description</FormLabel>
        <Textarea name="description" placeholder='Enter Description here' onChange={handleInputChange} />

        <Button marginTop={5} colorScheme='blue' onClick={handleSubmit}>Add</Button>
      </FormControl>
    </Center>
  );
};

export default BlogForm;
