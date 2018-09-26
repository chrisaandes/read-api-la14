import React from 'react';
import LinkCategory from './LinkCategory'

const FilterCategory = ({categories}) => {
    <div>
        {
            categories.map((category) => {
                return <LinkCategory name={category.name} />
            })
        }
        
    </div>
}

export default FilterCategory;