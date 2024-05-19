import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url));

var app = express();

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

import connectDB from './serverDB.js';


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRouter);
app.use(usersRouter);


connectDB();


app.listen(8080, () => {
  try {
    console.log('listening on port 8080');
  } catch (error) {
    console.log(err);
  }
})

export default app;
