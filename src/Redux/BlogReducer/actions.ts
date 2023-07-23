import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux'; // 
import axios from 'axios';
import { BlogPost } from './reducer';
import * as actionTypes from './actionTypes';

export const fetchBlogPostsRequest = () => ({
    type: actionTypes.FETCH_BLOG_POSTS_REQUEST,
});

export const fetchBlogPostsSuccess = (blogPosts: BlogPost[]) => ({
    type: actionTypes.FETCH_BLOG_POSTS_SUCCESS,
    payload: blogPosts,
});

export const fetchBlogPostsFailure = (error: string) => ({
    type: actionTypes.FETCH_BLOG_POSTS_FAILURE,
    payload: error,
});

export const fetchBlogPosts = () => {
    return (dispatch: ThunkDispatch<any, any, AnyAction>) => {
        dispatch(fetchBlogPostsRequest());

        axios
            .get('https://blogposts-rn01.onrender.com/blogPosts')
            .then((response) => {
                const blogPostsData: BlogPost[] = response.data;
                dispatch(fetchBlogPostsSuccess(blogPostsData));
            })
            .catch((error) => {
                dispatch(fetchBlogPostsFailure(error.message));
            });
    };
};

export const deleteBlogRequest = () => ({
    type: "DELETE_BLOG_REQUEST"
  });
  
  export const deleteBlogSuccess = (id: number) => ({
    type:" DELETE_BLOG_SUCCESS",
    payload: id,
  });
  
  export const deleteBlogFailure = (error: string) => ({
    type: "DELETE_BLOG_FAILURE",
    payload: error,
  });
  
  // export const deleteBlog = (id: number) => {
  //   return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  //     dispatch(deleteBlogRequest());
  
  //     try {
  //       await axios.delete(`https://blogposts-rn01.onrender.com/blogPosts/${id}`);
  //       dispatch(deleteBlogSuccess(id));
  //     } catch (error) {
  //       // dispatch(deleteBlogFailure(error.message));
  //     }
  //   };
  // };
  export const deleteBlog= async(id:Number)=>{
    let res= await axios.delete(`https://blogposts-rn01.onrender.com/blogPosts/${id}`)
    return res

  }