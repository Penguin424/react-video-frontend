import React from 'react';
import {connect} from 'react-redux'

import {Search} from '../components/Search.jsx';
import {Categories} from '../components/Categories/Categories.jsx'
import '../assets/styles/App.scss';


const HomePage = ({trends, originals, myList}) => {



    return (        
        <div className="App">
            <Search/>
            {myList.length > 0 && <Categories data={myList}  >Favoritos</Categories>};
            <Categories data={trends} >Trends</Categories>
            <Categories data={originals} >Originals</Categories>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
}

export default connect(mapStateToProps, null)(HomePage)