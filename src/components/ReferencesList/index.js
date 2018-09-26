import React from 'react';
import Reference from './Reference'
import _ from 'lodash'


const ReferencesList = ({list}) => (
     
    <div className="container-fluid">
        <ul className="media-list">
            {
                list.map((reference) => 
                    <Reference   
                        id={ reference.id }
                        key={ reference.id }
                        name={ reference.name }
                        description = { reference.description }
                        image = { _.get(reference, 'images[0].locationImage') } 
                    />
                )
            }
        </ul>
    </div>
    
);

export default ReferencesList;