import React from "react";
import s from "./Navbar.module.css"

const Navbar = () => {
    return(
        <nav className={s.wrapper_nav}>
            <ul className={s.nav}>
                <li className={s.nav_item}><a href="#" className={s.nav_link}>Profile</a></li>
                <li className={s.nav_item}><a href="#" className={s.nav_link}>Messages</a></li>
                <li className={s.nav_item}><a href="#" className={s.nav_link}>News</a></li>
                <li className={s.nav_item}><a href="#" className={s.nav_link}>Music</a></li>
                <li className={s.nav_item}><a href="#" className={s.nav_link}>Setting</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;