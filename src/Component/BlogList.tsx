import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { BlogPost } from '../Redux/BlogReducer/reducer';
import { fetchBlogPosts } from '../Redux/BlogReducer/actions';
import styles from './BlogList.module.css';

const BlogList: React.FC = () => {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const blogPosts: BlogPost[] = useSelector((state: any) => state.blog.blogPosts);

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        dispatch(fetchBlogPosts());
    }, [dispatch]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts
        .filter((post: BlogPost) => selectedCategory === 'All' || post.category === selectedCategory)
        .slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const categories = ['All', 'Salary / IRP5', 'Independent Contractor', 'Provisional Tax', 'Medical', 'Capital Gains', 'Donations', 'Deductions', 'Commission', 'Rental Income', 'Retirement', 'Dividends', 'Depreciation / Wear and Tear', 'Penalties', 'Travel Allowance ', 'Audit / Verification', 'Tax Threshold ', 'Foreign employment income', 'SARS & eFiling'];

    const handleCategorySelect = (selectedCategory: string) => {
        setSelectedCategory(selectedCategory);
        setCurrentPage(1);
    };

    return (
        <div className={styles.container}>
            <div className={styles.listContainer}>
                <h1 className={styles.h1tag}>Latest Posts in TaxTim's Blog :</h1>

                <ul>
                    {currentPosts.map((post: BlogPost) => (
                        <li key={post.id} className={styles.listItem}>
                            <h3>{post.title}</h3>
                            <h4>{post.date}</h4>
                            <img src={post.image} alt={post.title} />
                            <p>{post.description}</p>
                        </li>
                    ))}
                </ul>
                <div className={styles.pagination}>
                    {Array.from({ length: Math.ceil(blogPosts.length / postsPerPage) }).map((_, index) => (
                        <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? styles.active : ''}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles.newStructureContainer}>

                <div className="cont2">

                    <img
                        className={styles.taxtim}
                        src={`https://media.taxtim.com/images/tim_full.svg`}
                        alt="error"
                    />
                </div>
                <h3 className={styles.h3}>TaxTim will help you:</h3>
                <ul className={styles.taxtimList}>
                    <li>
                        <img
                            className={styles.rightSvg}
                            src="https://media.taxtim.com/images/icon_tick_circle.svg"
                            alt="error"
                        />
                        <p>Do Your Tax Return Easily</p>
                    </li>
                    <li>
                        <img
                            className={styles.rightSvg}
                            src="https://media.taxtim.com/images/icon_tick_circle.svg"
                            alt="error"
                        />
                        <p>Avoid penalties</p>
                    </li>
                    <li>
                        <img
                            className={styles.rightSvg}
                            src="https://media.taxtim.com/images/icon_tick_circle.svg"
                            alt="error"
                        />
                        <p>Maximise your refund</p>
                    </li>
                </ul>
                <p className={styles.desk}>
                    Tim uses your answers to complete your income tax return instantly and professionally, with everything filled in in the right place.
                </p>
                <p className={styles.desk}>
                    Let Tim submit your tax return direct to SARS in just a few clicks!
                </p>
                <button className={styles.getstarted}>GET STARTED</button>

                <div className={styles.sidebar}>
                    <h2>Blog Categories</h2>
                    <ul>
                        {categories.map((category) => (
                            <li key={category} onClick={() => handleCategorySelect(category)}>
                                {category} ({category === 'All' ? blogPosts.length : blogPosts.filter((post) => post.category === category).length} posts)
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


        </div >


    );
};

export default BlogList;
