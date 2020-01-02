import React, {useEffect, useState} from 'react';
import proptypes from 'prop-types';

import {CarouselItem} from './CarouselItem';
import '../../../assets/styles/components/Carousel.scss';

const Carousel = ({children, dataList}) => {

    const [dataI, setDataI] = useState([]);

    const setItemList = (dataItem) =>
    {
        
        if(dataItem === undefined)
        {
            console.log('primer if');
            
        }
        else
        {

            setDataI(dataItem);

        }
    }

    const itemList = (dataItem) =>
    {
        return dataItem.map((i) => 
        {

            const {title, duration, id, year, cover} = i;

            return <CarouselItem 
                    title={title} 
                    duration={duration} 
                    year={year} 
                    key={id} 
                    imgI={cover} 
                    />
        })
    }

    useEffect(() => {
        setItemList(dataList);
    }, [])

    return (
        <section className="carousel">
            <div className="carousel__container">
                {dataI.length === 0 ?  <h3>cargando...</h3> : itemList(dataI)}
            </div>
        </section>  
    );
};

Carousel.proptypes = {
    dataList: proptypes.array.isRequired
}

export {Carousel};