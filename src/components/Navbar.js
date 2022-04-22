import React from "react";

const Navbar = () => {
    return(
        <nav className={"wrapper-nav"}>
            <ul className="nav">
                <li className={"nav-item"}><a href="#" className="nav-link">Profile</a></li>
                <li className={"nav-item"}><a href="#" className="nav-link">Messages</a></li>
                <li className={"nav-item"}><a href="#" className="nav-link">News</a></li>
                <li className={"nav-item"}><a href="#" className="nav-link">Music</a></li>
                <li className={"nav-item"}><a href="#" className="nav-link">Setting</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;