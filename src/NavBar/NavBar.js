import './NavBar.css';
import React from 'react';
import '../Footer/Footer';

const NavBar = (props) => {
    return (

        <nav className="navbar navbar-expand-md navbar-dark nav-bg" >
            <div className="container-fluid">
                <p className="navbar-brand nav-title-text">Ownable</p>
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="newsletter-anchor" href="#footer-section">Join Newsletter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default NavBar;