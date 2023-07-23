import React, { useState,useEffect } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogEdit= () => {
  const {id}=useParams()
  const blogPosts = useSelector((state) => state.blog.blogPosts);

  
  useEffect(() => {
    let editedBlogPost = blogPosts.find((post) => post.id === +id);
    if (editedBlogPost) {
      setFormData(editedBlogPost);
    }
  }, [id, blogPosts]);
  // console.log(blogPosts)
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    image: "",
    description: "",
    category: "",
  });
console.log(formData,":f")
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const toast = useToast()
  const handleSubmit = () => {
    axios.patch(`https://blogposts-rn01.onrender.com/blogPosts/${id}`,formData).then(()=>{
      toast({
        title: 'Blog Edit.',
        description: "We've edited the post in blog page for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })

      navigate("/admin")
    })
  };

  return (
    <Center width={"50%"} margin={"auto"} padding={"10"} marginTop={10} marginBottom={5} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
      <FormControl isRequired>
        <FormLabel>Title</FormLabel>
        <Input name="title" placeholder='Title' value={formData.title} onChange={handleInputChange} />
        <FormLabel>Date</FormLabel>
        <Input name="date" placeholder='Date of Updation' value={formData.date} onChange={handleInputChange} />
        <FormLabel>Image</FormLabel>
        <Input name="image" placeholder='Image URL' value={formData.image} onChange={handleInputChange} />
        <FormLabel>Category</FormLabel>
        <Input name="category" placeholder='Category (ex- Salary/IRP5)' value={formData.category} onChange={handleInputChange} />
        <FormLabel>Description</FormLabel>
        <Textarea name="description" placeholder='Enter Description here' value={formData.description} onChange={handleInputChange} />

        <Button marginTop={5} colorScheme='blue' onClick={handleSubmit}>Edit</Button>
      </FormControl>
    </Center>
  );
};

export default BlogEdit;
