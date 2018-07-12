import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink to="/" className="navbar-brand mb-0 h1">Initiative-Tracker</NavLink>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink to="/add" activeClassName="active-link" className="nav-item nav-link">Add Character</NavLink>
                </div>
            </div>
            <i className="fa fa-spinner fa-pulse" style={{ color: '#FFF' }}></i>
        </nav>
    )
};

export default Header;