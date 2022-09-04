import { Routes, Route } from 'react-router-dom';

// Importando Elementos

import HomePage from '../pages/homePages';
import NavigationBar from '../components/navigationBar';
import CardPage from '../pages/cardInfoPage';
import ErrorPage from '../pages/error';

function RouterManager() {

    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/search/:lat/:lon' element={<CardPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </>
    )

}


export default RouterManager;