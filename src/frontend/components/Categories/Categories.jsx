import React from 'react';
import proptypes from 'prop-types';

import {Carousel} from './Carousel/Carousel';

import '../../assets/styles/components/Categories.scss'

const Categories = ({children, data}) => {


    return (
        <div>
            <h3 className="categories__title"> {children} </h3>
            <Carousel dataList={data} />
        </div>
    );
};

Categories.proptypes = 
{
    data: proptypes.array.isRequired,
}

export {Categories};