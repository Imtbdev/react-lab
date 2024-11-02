import React from 'react';

const Card = ({ image, title, description }) => {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <span>{description}</span>
        </div>
    );
};

export default Card;
