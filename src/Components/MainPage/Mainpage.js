import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../Tools/Navbar/Navbar';
import Header from './Header/Header';
import "../../css/bootstrap.min.css";
import "../../css/style.css";


const Mainpage = () => {

    return(
        <div className="container-xxl bg-white p-0">
            <Navbar/>
            <Header/>

        </div>
    )
}

export default Mainpage;