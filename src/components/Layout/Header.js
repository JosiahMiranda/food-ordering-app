import React from "react";

import mealsImage from "../../assets/meals.jpeg";
import styles from "./Header.module.css";


const Header = props => {
    return <>
        <header className={styles.header}>
            <h1>Meals</h1>
            <button>Cart</button>
        </header>
        <div className={styles['main-image']}>
            <img src={mealsImage} alt="A table full of different meals"/>
        </div>
    </>
};

export default Header;