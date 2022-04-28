import React from "react";
import s from "./Header.module.css"
import logo from '../../logo_1.png';

const Header = () => {
    return(
        <header className={s.header}>
            <img src={logo} alt="logo" className={s.img_header}/>
        </header>
    )
};

export default Header;

