// packages
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';

// redux
import store from './stores';

// components
import App from './components/App';

const middlewares = [];
const history = createHistory();
middlewares.push(routerMiddleware(history));

const element = (
    <Provider store={store(middlewares)}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
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
