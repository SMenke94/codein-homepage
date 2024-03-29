import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import i18n from './i18n-init';
import { I18nextProvider } from 'react-i18next';



ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>
, document.getElementById('root'));

serviceWorker.unregister();