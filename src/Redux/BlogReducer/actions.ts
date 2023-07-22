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
            .get('http://localhost:8080/blogPosts')
            .then((response) => {
                const blogPostsData: BlogPost[] = response.data;
                dispatch(fetchBlogPostsSuccess(blogPostsData));
            })
            .catch((error) => {
                dispatch(fetchBlogPostsFailure(error.message));
            });
    };
};