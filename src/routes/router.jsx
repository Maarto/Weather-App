import { Routes, Route } from 'react-router-dom';

// Importando Elementos

import HomePage from '../pages/homePages'; // HomePage Element
import NavigationBar from '../components/essentials/navigationBar'; // NavBar Element
import CardPage from '../pages/cardInfoPage'; // Weather Card Element
import ErrorPage from '../pages/error'; // Error 404 Element

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