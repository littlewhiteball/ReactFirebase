// packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// components
import App from './components/App';
import store from './stores';

const element = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

const render = () => ReactDOM.hydrate(element, document.getElementById('root'));

render();

// firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//         ReactDOM.render(<Logout />, document.getElementById('auth'));
//     } else {
//         ReactDOM.render(<Login />, document.getElementById('auth'));
//     }
// });
