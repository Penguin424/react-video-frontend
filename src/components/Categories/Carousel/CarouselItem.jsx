import React from 'react';
import proptypes from 'prop-types';

import '../../../assets/styles/components/CarouselItem.scss';

import playIcon from '../../../assets/static/play-icon.png';
import plusIcon from '../../../assets/static/plus-icon.png';

const CarouselItem = ({title, duration, year, imgI}) => {
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={imgI} alt=""  />
                <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" /> 
                    <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" /> 
                </div>
                <p className="carousel-item__details--title"> {title} </p>
                <p className="carousel-item__details--subtitle"> {`${year} - ${duration}`} </p>
            </div>
        </div>
    );
};

CarouselItem.proptypes = 
{
    title: proptypes.string.isRequired,
    duration: proptypes.number.isRequired,
    year: proptypes.number.isRequired,
    imgI: proptypes.any
}

export  {CarouselItem};