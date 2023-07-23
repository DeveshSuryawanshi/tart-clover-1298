import React from 'react';
import styles from './SideBar.module.css'

interface SidebarProps {
    categories: string[];
    selectedCategory: string;
    onCategorySelect: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, onCategorySelect }) => {
    return (
        <div className={styles.sidebar}>
            <h2>Blog Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li
                        key={category}
                        onClick={() => onCategorySelect(category)}
                        className={category === selectedCategory ? styles.active : ''}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
