import { Route, Routes } from 'react-router-dom';

import AdvertisementsList from './pages/advertisements';
import EditAdvertisement from './components/editAdvertisement';

import HomePage from './pages/homePage';
import NewAdvertisement from './pages/newAdvertisement';
import NotFound from './pages/notfound';
import Layout from './components/layout';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
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
            </Route>
        </Routes>
    );
}

export default App;
