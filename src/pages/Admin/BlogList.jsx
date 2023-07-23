import React, { useState } from 'react'
import { Card, Image,Stack,Heading,Text,Divider,ButtonGroup,Button, CardBody, CardFooter} from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, useToast, Collapse } from '@chakra-ui/react'
import { BlogPost } from '../../Redux/BlogReducer/reducer';
import { deleteBlog} from '../../Redux/BlogReducer/actions';
import { useDispatch ,Link} from 'react-redux';
import { Link as RLink} from "react-router-dom";
const BlogList = ({ el ,setCount})=> {
  const dispatch = useDispatch();
  // const [count,setCount]=useState(0)
 
    const [show, setShow] = React.useState(false)

    const handleToggle = () => setShow(!show)
    const toast = useToast()
    const handleDelete = () => {
     deleteBlog(+el.id).then(()=>{

      dispatch({type:"DELETE_BLOG_SUCCESS",payload:el.id})
        setCount((pre)=>pre+1)

        toast({
          title: 'Blog is Delete.',
          description: "We've deleted the post in blog page for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      })
    };
  return (
    <Card maxW='sm'>
    <CardBody>
      <Image
        src={el.image}
        alt={el.title}
        borderRadius='lg'
        boxSize='300px' // Adjust the image size as needed
        objectFit='cover' // Preserve the image aspect ratio while covering the entire box

      />
      <Stack mt='6' spacing='3'>
        <Collapse startingHeight={20} in={show}>
        <strong>{el.title}</strong>
    </Collapse>
        <Text>
          {el.date}
        </Text>
        <Collapse startingHeight={20} in={show}>
     {el.description}
    </Collapse>
    <Button size='sm' onClick={handleToggle} mt='1rem'>
      Show {show ? 'Less' : 'More'}
    </Button>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue' onClick={handleDelete}>
        Delete
        </Button>
        <Button variant='ghost' colorScheme='blue'>
          <RLink to={`/blog/${el.id}`}>Edit Blog</RLink>
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default BlogList
