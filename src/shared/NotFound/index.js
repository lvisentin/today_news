import React from 'react'
import './index.css';
import NotFoundSvg from '../../assets/images/not_found.svg';

function NotFound() {
    return (
        <div className="notfound-message">
            <img className="notfound-image" src={NotFoundSvg} />            
            {/* <img src='../../assets/images/not_found.svg' /> */}
            <p>
                Não encontramos notícias
            </p>
        </div>
    )
}

export default NotFound
