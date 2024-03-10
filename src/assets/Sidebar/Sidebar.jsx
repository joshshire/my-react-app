import React from 'react';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom'; // Change this line

function Sidebar() {
    const toggleSidebar = () => {
        const links = document.querySelector(`.${styles.links}`);
        const toggle = document.querySelector(`.${styles.toggle}`);
        const xDiv = document.querySelector(`.${styles.XDiv}`);
        console.log('Sidebar toggled');
        console.log('Links element:', links); // Check if the links element is selected correctly
        links.classList.toggle(styles.active);
        toggle.classList.toggle(styles.hide); // Add this line
        xDiv.classList.toggle(styles.show); // Add this line
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.title}>
                    <NavLink to="/Home">
                        Hello
                    </NavLink>    
            </div>
            <div className={styles.toggle} onClick={toggleSidebar}>
                <span className={styles.bars}></span>
                <span className={styles.bars}></span>
                <span className={styles.bars}></span>
            </div>
            <div className={styles.links}>
                <ul>
                    <li>
                        <NavLink to="/Compodent" className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}>
                            Compodent
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/About' className={({ isActive}) => isActive ? `${styles.activeLink}` : ''}>
                            About
                        </NavLink></li>
                    <li>
                        <NavLink to='/Learn' className={({ isActive}) => isActive ? `${styles.activeLink}` : ''}>
                            Learn
                        </NavLink>
                    </li>
                    <li><a href='#'>Work For us</a></li>
                </ul>
            </div>
            <div className={styles.XDiv} onClick={toggleSidebar}>
                <span className={styles.x}></span>
            </div>
        </nav>
    );
}

export default Sidebar;