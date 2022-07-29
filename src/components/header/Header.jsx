import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <>
            <header className='siteHeader mt-3 shadow-sm p-3 mb-5 bg-body rounded'>

                <div className='container d-flex align-items-center justify-content-between'>
                    <a className='headingLink' href="#">Where in the world?
                    </a>
                    <p className='headerDarkMode'>Dark Mode</p>
                </div>
            </header>
        </>
    );
};

export default Header;