// src/store/actions/blogActions.ts

import axios from "axios";
import { BlogPost, FETCH_BLOG_POSTS_SUCCESS, FETCH_BLOG_POSTS_ERROR } from "../types/blogTypes";
import { Dispatch, AnyAction } from "redux";
export const fetchBlogPostsSuccess = (blogPosts: BlogPost[]) => {
    return {
        type: FETCH_BLOG_POSTS_SUCCESS,
        payload: blogPosts,
    };
};

export const fetchBlogPostsError = (errorMessage: string) => {
    return {
        type: FETCH_BLOG_POSTS_ERROR,
        payload: errorMessage,
    };
};

export const fetchBlogPosts = () => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axios.get<BlogPost[]>("http://localhost:8080/blogPosts");
        dispatch(fetchBlogPostsSuccess(response.data));
    } catch (error: any) {
        console.error("Error fetching blog posts:", error);
        dispatch(fetchBlogPostsError(error.message));
    }
};
``