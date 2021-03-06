import fs from 'fs';
import path from 'path';

import 'babel-polyfill';
import * as functions from 'firebase-functions';
import express from 'express';
import parser from 'body-parser';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './src/stores';
import App from './App';

const app = express();

app.set('view engine', 'ejs');

const index = fs.readFileSync(path.join(__dirname, '/public/index.ejs'), 'utf-8');
const profile = fs.readFileSync(path.join(__dirname, '/public/profile.ejs'), 'utf-8');

/**
 * TODO: The profile route contains EditProfile component which uses Firebase
 * storage API that's not supporting server side (node js) as of 2/25/2018.
 * So I can't server side render EditProfile component. Instead, I have to
 * staticly render html from server side, and let client side render the actual
 * react components. This breaks the isomorphic characterists of react components
 * between server and client, as I have to maintain server side html and client
 * react components separately. The App.jsx is also different between server
 * and client.
 * Possible solutions:
 * 1. Use Next.js for server side rendering
 * 2. Keep checking updates from Firebase Storage API
 */
app.route('/profile')
    .get((req, res) => {
        res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
        res.send(profile);
    });

app.route('*')
    .get((req, res) => {
        const context = {};
        const element = () => (
            <Provider store={store([])}>
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

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

// TODO: default export does not work
// eslint-disable-next-line import/prefer-default-export
export const rfapp = functions.https.onRequest(app);
