import React from 'react';

function Food(props) {
    const { title, image, calories } = props
    return (
        <div className="items">
            <img src={image} />
            <h3>{title}</h3>
            <p>Calories: <span>{Math.floor(calories)}</span></p>
        </div>
    );
}

export default Food;