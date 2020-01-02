import React, {useEffect, useState} from 'react';

import {Header} from '../components/Header.jsx';
import {Search} from '../components/Search.jsx';
import {Categories} from '../components/Categories/Categories.jsx'
import {Footer} from '../components/Footer.jsx';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

import {useInitialState} from '../hooks/initialStateLess.js';

const App = () => {

    const dataState = useInitialState(API);


    return (

        

        <div className="App">
            <Header/>
            <Search/>
            {dataState.length === 0 ? <h3>cargando...</h3> : <Categories data={dataState.trends}>Trends</Categories>}
            {dataState.length === 0 ? <h3>cargando...</h3> : <Categories data={dataState.originals}>Originals</Categories>}
            <Footer/>
        </div>
    );
};

export {App};