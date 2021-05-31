import React from 'react';
import LogoIcon from '@assets/images/logo-icon.jpeg';

const Footer = () => {
    return (
        <footer className="footer" role="contentinfo">
            <div className="footer__brand"><img src={LogoIcon} alt="" className="footer__brand-logo" /></div>
            <p className="footer__copyright">© 2021 hypecode</p>
        </footer>
    );
};

export default Footer;