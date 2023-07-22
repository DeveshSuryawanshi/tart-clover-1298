import * as actionTypes from './actionTypes';

export interface BlogPost {
    id: number;
    title: string;
    date: string;
    image: string;
    description: string;
    category: string;
}

export interface BlogState {
    loading: boolean;
    blogPosts: BlogPost[];
    error: string | null;
}

const initialState: BlogState = {
    loading: false,
    blogPosts: [],
    error: null,
};

const blogReducer = (state = initialState, action: any): BlogState => {
    switch (action.type) {
        case actionTypes.FETCH_BLOG_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.FETCH_BLOG_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                blogPosts: action.payload,
            };
        case actionTypes.FETCH_BLOG_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default blogReducer;