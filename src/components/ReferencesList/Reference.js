import React from 'react';

const Reference = ({id,name, description, image}) => (
    
    <li className="media">
        <div className="media-body">
            <h4>{id} - {name}</h4>
            <img width="25%" src={image} />
            <p>
                {description}             
            </p>
        </div>
        <hr/>
    </li>
    
    
);


export default Reference;