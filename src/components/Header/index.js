import React from 'react'
import RefreshIcon from '@material-ui/icons/Refresh';
import './index.scss';

function Header() {
    return (
        <nav className="header-div">
            <div className="header-title">
                <h1>Today news</h1>
            </div>
            <div className="header-icons">
                <RefreshIcon />
            </div>
        </nav>
    )
}

export default Header
