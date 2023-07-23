import React from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const handlePageChange = (pageNumber: number) => {
        onPageChange(pageNumber);
    };

    return (
        <div className={styles.pagination}>
            <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                Previous
            </button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
