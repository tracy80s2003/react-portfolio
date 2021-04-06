import React from 'react';

const Card = (props) => {
    return (
        <div>
            <h5>{props.project.name}</h5>
            <h6>{props.project.description}</h6>
        </div>
    )
}

export default Card
