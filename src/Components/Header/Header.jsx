import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"


const Header = () => {
    return (
        <nav>
            <Link to="/"> Home</Link>
            <Link to="/review"> Order Review</Link>
            <Link to="/about"> About</Link>
            <Link to="/contacts"> Contacts</Link>
        </nav>
    );
};

export default Header;<h3>This is header</h3>