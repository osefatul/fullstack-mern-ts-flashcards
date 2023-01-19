import React from 'react';
import './card.css';

const Card = ({children}: {children:any}) => {
    return (
        <div className="card">
            {children}
        </div>
    );
};

export default Card;