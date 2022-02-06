import React from 'react';
import { Home } from './components/Home';

export const App = () => {
    const isloggedOut = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);

    if (isloggedOut.includes("logout")) {
        return (
            <p>You have been successfully logged out.</p>
        );
    }
    else {
        return (
            <Home />
        );
    }
}