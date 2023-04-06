import Container from '@mui/material/Container';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from '../header';

const Layout = () => {
    return (
        <div className='App'>
            <Header />
            <Container maxWidth='xl'>
                <Outlet />
                <ToastContainer />
            </Container>
        </div>
    );
};

export default Layout;
