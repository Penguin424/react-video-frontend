import React, {useEffect, useState} from 'react';
import proptypes from 'prop-types';
import { connect } from "react-redux";

import '../../../assets/styles/components/CarouselItem.scss';

import {setFavorite, deleteFavorite} from '../../../actions/index.js';

import playIcon from '../../../assets/static/play-icon.png';
import plusIcon from '../../../assets/static/plus-icon.png';
import removeIcon from '../../../assets/static/remove-icon.png';

const CarouselItem = (props) => {

    const {title, duration, year, cover, myList, id, isList} = props;

    const [data, setData] = useState(false);

    useEffect(()=> {
        setData(isList);
    },[isList])

    const handleSetFavorite = () =>{
        
        const exits = myList.find(i => i.id === id);

        if(exits){
            
            alert('Ya tienes esta (serie/pelicula) en favoritos');
            
        }
        else{

            props.setFavorite({
                title, 
                duration, 
                year, 
                cover, 
                id,
                isList: true
            })
        }

    }

    const handleDeleteFavorite = (itemId) => {

        props.deleteFavorite(itemId)


    }




    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt=""  />
                <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
                    {

                        data ?
                        <img 
                        className="carousel-item__details--img" 
                        src={removeIcon}
                        alt="remove Icon"
                        onClick={()=>handleDeleteFavorite(id)} 
                        /> 
                        :
                        <img 
                        className="carousel-item__details--img" 
                        src={plusIcon} 
                        alt="Plus Icon"
                        onClick={handleSetFavorite} 
                        /> 
                    }
                     
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
    cover: proptypes.string.isRequired,
    id: proptypes.number.isRequired,
    isList: proptypes.bool.isRequired
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
}

const mapStateToProps = state => {
    return {
        myList: state.myList,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);