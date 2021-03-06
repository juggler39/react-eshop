import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component.jsx';

import { auth } from './firebase/firebase.utils';

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        console.log('App mounted');
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
        return function cleanup() {
            console.log('App unmounted');
        };
    });

    return (
        <div>
            <Header currentUser={currentUser}/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/signin" element={<SignInAndSignUpPage />} />
            </Routes>
        </div>
    );
};

export default App;
