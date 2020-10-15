import React from 'react';

import Title from './Title';

import '../../styles/header.css';

const Header = () => {
    return(
        <div className="header">
                <i className="fas fa-bars" />
                <Title />
                <i className="fas fa-shopping-cart" />            
        </div>
    )
}

export default Header;