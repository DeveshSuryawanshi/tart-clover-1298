import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { BlogPost } from '../../Redux/BlogReducer/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogPosts } from '../../Redux/BlogReducer/actions';
import { Grid, GridItem } from '@chakra-ui/react'

import BlogList from './BlogList';

const Blog = () => {




  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const blogPosts: BlogPost[] = useSelector((state: any) => state.blog.blogPosts);

  useEffect(() => {
      dispatch(fetchBlogPosts());
  }, [dispatch]);
  console.log(blogPosts)

  // const [show, setShow] = React.useState(false)

  // const handleToggle = () => setShow(!show)
  const [count,setCount]=useState(0)

  return (
    <div>
   

  
  
  <Grid templateColumns='repeat(3, 1fr)' gap={6}>
       { blogPosts?.map((el :BlogPost)=>{return <GridItem w='100%'   ><BlogList el={el} setCount={setCount}/></GridItem>})}
 
</Grid>

    </div>
  )
}

export default Blog
