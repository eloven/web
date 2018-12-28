import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookie from 'cookie-parser';
import path from 'path';
import mongoose from 'mongoose';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'SESSION_SECRET',
}));

//  Mid
app.use((req, res, next) => {
    res.header('name', 'express');
    next();
});
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * Primary app routes.
 */
app.get('/', (req, res, next) => {
    res.send('hello world express ok');
});

export default app;
