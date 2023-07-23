import axios from 'axios'
import React, { useState,useEffect } from 'react'

const Blog = () => {


const [blogData,setBlogData]=useState([])

  useEffect(()=>{

    axios(`https://blogposts-rn01.onrender.com/blogPosts`).then((res)=>{setBlogData(res.data)})
  },[])
  console.log(blogData)
  return (
    <div>
      
    </div>
  )
}

export default Blog
