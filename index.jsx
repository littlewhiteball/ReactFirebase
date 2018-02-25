import fs from 'fs';
import path from 'path';

import 'babel-polyfill';
import * as functions from 'firebase-functions';
import express from 'express';
import parser from 'body-parser';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const app = express();

app.set('view engine', 'ejs');

const index = fs.readFileSync(path.join(__dirname, '/public/index.ejs'), 'utf-8');
const profile = fs.readFileSync(path.join(__dirname, '/public/profile.ejs'), 'utf-8');

app.route('/')
    .get((req, res) => {
        // const context = {};
        // const element = () => (
        //     <Provider store={store([])}>
        //         <StaticRouter location={req.url} context={context}>
        //             <App />
        //         </StaticRouter>
        //     </Provider>
        // );
        // const content = renderToStaticMarkup(element());
        // const html = index.replace('<!-- ::APP:: -->', content);
        // res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
        // res.send(html);
        res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
        res.send(index);
    });

app.route('/profile')
    .get((req, res) => {
        const element = () => (
            <h1>Temp profile</h1>
        );
        const content = renderToStaticMarkup(element());
        const html = profile.replace('<!-- ::APP:: -->', content);
        res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
        res.send(html);
    });

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

// TODO: default export does not work
// eslint-disable-next-line import/prefer-default-export
export const rfapp = functions.https.onRequest(app);
