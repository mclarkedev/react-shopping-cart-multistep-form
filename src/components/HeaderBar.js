import React from 'react';
import Hamburger from '../img/menu.svg';
import Search from '../img/search.svg';
import Cart from '../img/cart.svg';
import Header from '../styles/elements/header';

const HeaderBar = () => {
    return (
        <Header>
            <div className="brand">
                <div className="hamburger" aria-label="Open mobile navigation menu">
                    <img src={Hamburger} alt="" />
                </div>
                <p>MyStore</p>
            </div>
            <nav>
                <ul>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kids</li>
                    <li>Sale</li>
                </ul>
            </nav>
            <div className="nav-icons">
                <div aria-label="Click to open search">
                    <img src={Search} alt="Search" />
                </div>
                <div aria-label="Click to go to cart">
                    <img src={Cart} alt="Shopping cart" />
                </div>
            </div>
        </Header>
    )
}

export default HeaderBar;