import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={s.wrapper_nav}>
            <ul className={s.nav}>
                <li className={s.nav_item}><NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.link }>Profile</NavLink></li>
                <li className={s.nav_item}><NavLink to="/dialogs" className ={ navData => navData.isActive ? s.active : s.link }>Dialogs</NavLink></li>
                <li className={s.nav_item}><NavLink to="/news" className = { navData => navData.isActive ? s.active : s.link }>News</NavLink></li>
                <li className={s.nav_item}><NavLink to="/music"  className = { navData => navData.isActive ? s.active : s.link }>Music</NavLink></li>
                <li className={s.nav_item}><NavLink to="/setting"  className = { navData => navData.isActive ? s.active : s.link }>Setting</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navbar;