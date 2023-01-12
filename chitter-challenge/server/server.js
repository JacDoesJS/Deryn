import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import morgan from 'morgan';

import { allPeeps } from './routes/allpeeps.js';
import { addPeep } from './routes/addPeep.js';
import { peepItem } from './routes/peepItem.js';
import { home } from './routes/home.js';
import { login } from './routes/login.js';
import { register } from './routes/register.js';

const app = express();
// const database = 'mongodb://localhost:27017/data';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.PORT;
const host = process.env.HOST;

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();

})

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan(`tiny`));


// app.use('/', indexRouter);
app.use(`/login`, login);
app.use(`/peepItem`, peepItem);
app.use(`/allPeeps`, allPeeps);
app.use(`/addPeep`, addPeep);
app.use(`/register`, register);
app.use(`/home`, home);

const main = async () => {
    console.log('Connecting to database...');
    mongoose.connect(process.env.ATLAS_URI);
    console.log('CONNECTED TO database');

}
main().catch(err => console.log(err));

const server = app.listen(port, host, () => {
    const SERVERHOST = host;
    const SERVERPORT = port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
});
export default server;