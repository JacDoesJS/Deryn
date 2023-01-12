import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import indexRouter from './routes/index.js';
import gameRouter from './routes/game.js';
import againRouter from './routes/again.js';
import winnerRouter from './routes/winner.js';

const app = express();

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.PORT;
const host = process.env.HOST;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('public/images'));

app.use('/images', express.static('images'));

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/winner', winnerRouter);
app.use('/again', againRouter);


const server = app.listen(port, host, () => {
    const SERVERHOST = host;
    const SERVERPORT = port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
});
export default server;