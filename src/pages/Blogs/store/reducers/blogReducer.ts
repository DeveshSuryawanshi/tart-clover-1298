// src/store/reducers/blogReducer.ts

import { BlogPost, BlogState, FETCH_BLOG_POSTS_SUCCESS } from "../types/blogTypes";

const initialState: BlogState = {
    blogPosts: [],
};

const blogReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_BLOG_POSTS_SUCCESS:
            return {
                ...state,
                blogPosts: action.payload,
            };
        default:
            return state;
    }
};

export default blogReducer;
