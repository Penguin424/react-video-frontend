import React, {useEffect, useState} from 'react';
import proptypes from 'prop-types';

import CarouselItem from './CarouselItem';
import '../../../assets/styles/components/Carousel.scss';

const Carousel = ({dataList}) => {

    const [dataI, setDataI] = useState([]);

    // const setItemList = (dataItem) =>
    // {
        
    //     if(dataItem === undefined)
    //     {
    //         console.log('primer if');
            
    //     }
    //     else
    //     {

    //         setDataI(dataItem);

    //     }
    // }

    const itemList = (dataItem) =>
    {
        return dataItem.map((i, index) => 
        {

            const {title, duration, year, cover, id, isList} = i;

            return <CarouselItem 
                    title={title} 
                    duration={duration} 
                    year={year} 
                    key={index} 
                    cover={cover}
                    id={id} 
                    isList={isList}
                    />
        })
    }

    useEffect(() => {
        setDataI(dataList);
    }, [dataList])

    return (
        <section className="carousel">
            <div className="carousel__container">
                {itemList(dataI)}
            </div>
        </section>  
    );
};

Carousel.proptypes = {
    dataList: proptypes.array.isRequired
}

export {Carousel};