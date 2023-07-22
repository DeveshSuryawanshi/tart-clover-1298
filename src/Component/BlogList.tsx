import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { BlogPost } from '../Redux/BlogReducer/reducer';
import { fetchBlogPosts } from '../Redux/BlogReducer/actions';

const BlogList: React.FC = () => {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const blogPosts: BlogPost[] = useSelector((state: any) => state.blog.blogPosts);

    useEffect(() => {
        dispatch(fetchBlogPosts());
    }, [dispatch]);

    return (
        <div>
            <ul>
                {blogPosts.map((post: BlogPost) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>Date: {post.date}</p>
                        <img src={post.image} alt={post.title} />
                        <p>{post.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
