// src/components/BlogPage.tsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogPosts } from "./store/actions/blogActions";
import { RootState } from "../../Redux/Store";

const BlogPage: React.FC = () => {
    const dispatch = useDispatch();
    const blogPosts = useSelector((state: RootState) => state.blog.blogPosts);

    useEffect(() => {
        // dispatch(fetchBlogPosts());
    }, [dispatch]);

    return (
        <div>
            {blogPosts.map((post: any) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.date}</p>
                    <img src={post.image} alt={post.title} />
                    <p>{post.description}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogPage;
