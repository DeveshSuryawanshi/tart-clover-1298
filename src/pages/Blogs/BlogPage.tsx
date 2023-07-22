import React, { useEffect } from 'react';
import BlogList from '../../Component/BlogList';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchBlogPosts } from '../../Redux/BlogReducer/actions';

const BlogPage: React.FC = () => {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

    useEffect(() => {
        dispatch(fetchBlogPosts());
    }, [dispatch]);

    return (
        <div>
            <BlogList />
        </div>
    );
};

export default BlogPage;
