import Container from '@mui/material/Container';
import { Route, Routes } from 'react-router-dom';

import AdvertisementsList from './components/advertisements';
import EditAdvertisement from './components/editAdvertisement';
import Header from './components/header';
import HomePage from './components/homePage';
import NewAdvertisement from './components/newAdvertisement';
import NotFound from './components/notfound';

function App() {
    return (
        <div className='App'>
            <Header />
            <Container maxWidth='xl'>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route
                        path='/advertisements'
                        element={<AdvertisementsList />}
                    />
                    <Route
                        path='/new-advertisement'
                        element={<NewAdvertisement />}
                    />
                    <Route
                        path='/edit-advertisement/:advertisementId'
                        element={<EditAdvertisement />}
                    />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Container>
        </div>
    );
}

export default App;
