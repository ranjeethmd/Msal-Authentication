import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { getInstance } from './authentication'
import { MsalProvider } from "@azure/msal-react";

const msalInstance = getInstance();
const rootElement = document.getElementById('ifs-customer-cat-view');

ReactDOM.render(
    <MsalProvider instance={msalInstance}>
        <App />
    </MsalProvider>,
    rootElement);
