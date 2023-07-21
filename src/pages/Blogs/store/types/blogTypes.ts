// src/store/types/blogTypes.ts

export interface BlogPost {
    id: number;
    title: string;
    date: string;
    image: string;
    description: string;
}

export interface BlogState {
    blogPosts: BlogPost[];
}

export const FETCH_BLOG_POSTS_SUCCESS = "FETCH_BLOG_POSTS_SUCCESS";
export const FETCH_BLOG_POSTS_ERROR = "FETCH_BLOG_POSTS_ERROR";
