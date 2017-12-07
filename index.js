import * as functions from 'firebase-functions';
import express from 'express';
import parser from 'body-parser';
import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';

var app = express();

app.set('view engine', 'ejs');

const index = fs.readFileSync(__dirname + '/public/index.ejs', 'utf-8');
const login = fs.readFileSync(__dirname + '/public/login.ejs', 'utf-8');
const logout = fs.readFileSync(__dirname + '/public/logout.ejs', 'utf-8');

app.route('/')
    .get(function (req, res) {
        const html = index.replace('<!-- ::APP:: -->', renderToString(<h2>TODO: Index server side rendering</h2>));
        res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
        res.send(html);
    });

app.route('/login')
    .get((req, res) => {
        const html = login.replace('<!-- ::APP:: -->', renderToString(<h3>TODO: Login server side rendering</h3>));
        res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
        res.send(html);
    });

app.route('/logout')
    .get((req, res) => {
        const html = logout.replace('<!-- ::APP:: -->', renderToString(<h3>TODO: Logout server side rendering</h3>));
        res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
        res.send(html);
    });

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

export let rfapp = functions.https.onRequest(app);