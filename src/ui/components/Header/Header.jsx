import React from 'react';
import Logo from '@assets/images/logo.png';

const Header = () => {
    return (
        <header className="header container--full" role="banner">
            <div className="header__brand-logo"><img src={Logo}  className="header__brand-img"/></div>
            <div className="header__nav">
                <nav className="header__nav-content">
                    <ul className="header__nav-items">
                        <li className="header__nav-item">
                            <span className="sr-only"> Nav is coming soon... :) </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;