
import { useState,useEffect } from 'react'
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { BlogPost } from '../../Redux/BlogReducer/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogPosts } from '../../Redux/BlogReducer/actions';
import { Grid, GridItem,useBreakpointValue  } from '@chakra-ui/react'

import BlogList from './BlogList';

const Blog = () => {




  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const blogPosts: BlogPost[] = useSelector((state: any) => state.blog.blogPosts);

  useEffect(() => {
      dispatch(fetchBlogPosts());
  }, [dispatch]);



  const [count,setCount]=useState(0)
console.log(count)
const gridColumnTemplate= useBreakpointValue({
  base: "repeat(1, 1fr)", // 0-30em (480px)
  sm: "repeat(1, 1fr)", // 30em-48em (480px - 768px)
  md: "repeat(2, 1fr)", // 48em-62em (768px - 992px)
  lg: "repeat(3, 1fr)", // 62em-80em (992px - 1280px)
  xl: "repeat(4, 1fr)", // 80em+ (1280px+)
}) || "repeat(2, 1fr)"; 
  return (
    <div>
  <Grid templateColumns={gridColumnTemplate} gap={6}>
       { blogPosts?.map((el :BlogPost)=>{return <GridItem w='100%'   ><BlogList el={el} setCount={setCount}/></GridItem>})}
 
</Grid>

    </div>
  )
}

export default Blog
