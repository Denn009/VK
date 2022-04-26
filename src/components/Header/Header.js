import React from "react";
import s from "./Header.module.css"


const Header = () => {
    return(
        <header className={s.header}>
            <img src="https://o.remove.bg/downloads/383dc1f5-a91e-46dc-a072-3e95b2c0076c/pngtree-design-round-shape-png-image_3523663-removebg-preview.png" alt="logo" className={s.img_header}/>
        </header>
    )
};

export default Header;