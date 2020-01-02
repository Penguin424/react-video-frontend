import {useEffect, useState} from 'react'

const useInitialState = (API) => 
{

    const [videos, setVideos] = useState([]);


    const getVideos = async() =>{

        let res = await fetch(API);
        let data = await res.json();

        setVideos(data);
    

    }

    useEffect(() => {

        // fetch('http://localhost:3000/initalState').then(response => response.json()).then(data => setVideos(data));

        getVideos();

    }, [])

    return videos;
}

export {useInitialState};