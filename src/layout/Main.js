import React from 'react';
import Navbar from '../pages/Navbar/Navbar'
import Footer from '../pages/Footer/Footer'
import { Outlet } from 'react-router-dom';
const Main = () => {

    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer ></Footer>

        </div>
    );
};

export default Main;