import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => {
    return (
        <div className="appHeader">
            <div><Link to="/user-details">User Details</Link></div>
            <div><Link to="/club-details">Club Details</Link></div>
        </div>
    )
}

export default AppHeader;
