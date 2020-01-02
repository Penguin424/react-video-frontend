import React from 'react';

import {Search} from '../components/Search.jsx';
import {Categories} from '../components/Categories/Categories.jsx'
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

import {useInitialState} from '../hooks/initialStateLess.js';

const HomePage = () => {

    const dataState = useInitialState(API);


    return (

        

        <div className="App">
            <Search/>
            {dataState.length === 0 ? <h3>cargando...</h3> : <Categories data={dataState.trends}>Trends</Categories>}
            {dataState.length === 0 ? <h3>cargando...</h3> : <Categories data={dataState.originals}>Originals</Categories>}
        </div>
    );
};

export {HomePage};