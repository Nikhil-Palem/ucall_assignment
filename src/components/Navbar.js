import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.title}>Book Manager</h1>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to="/" className={styles.navLink}>Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/add" className={styles.navLink}>Add Book</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
