import fs from 'fs';
import path from 'path';

import * as functions from 'firebase-functions';
import express from 'express';
import parser from 'body-parser';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './src/stores';
import App from './src/components/App';

const app = express();

app.set('view engine', 'ejs');

const index = fs.readFileSync(path.join(__dirname, '/public/index.ejs'), 'utf-8');
const login = fs.readFileSync(path.join(__dirname, '/public/login.ejs'), 'utf-8');
const logout = fs.readFileSync(path.join(__dirname, '/public/logout.ejs'), 'utf-8');

app.route('*')
    .get((req, res) => {
        const context = {};
        const element = () => (
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </Provider>
        );
        const content = renderToStaticMarkup(element());
        const html = index.replace('<!-- ::APP:: -->', content);
        res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
        res.send(html);
    });

// app.route('/')
//     .get((req, res) => {
//         const context = {};
//         const element = () => (
//             <StaticRouter location={req.url} context={context}>
//                 <Routes />
//             </StaticRouter>
//         );
//         const content = renderToString(element());
//         const html = index.replace('<!-- ::APP:: -->', content);
//         res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
//         res.send(html);
//     });

// app.route('/login')
//     .get((req, res) => {
//         const html = login.replace('<!-- ::APP:: -->', renderToString(<h3>TODO: Login server side rendering</h3>));
//         res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
//         res.send(html);
//     });

// app.route('/logout')
//     .get((req, res) => {
//         const html = logout.replace('<!-- ::APP:: -->', renderToString(<h3>TODO: Logout server side rendering</h3>));
//         res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
//         res.send(html);
//     });

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

// TODO: default export does not work
export const rfapp = functions.https.onRequest(app);

// const rfapp = functions.https.onRequest(app);

// export default rfapp;
