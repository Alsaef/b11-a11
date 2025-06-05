import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;