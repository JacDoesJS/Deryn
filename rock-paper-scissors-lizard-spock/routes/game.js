import express from 'express';
const router = express.Router();

import Battle from '../src/battle.js';
import Player from '../src/player.js';

router.post('/', (req, res) => {

    const name = req.body.player1;
    req.app.locals.name = name;

    const battle = new Battle();
    battle.computerGuess();
    req.app.locals.battle = battle;

    const player = new Player(name)
    req.app.locals.player = player;

    res.redirect('/game');
})

router.get('/', (req, res) => {
    const user = req.app.locals.name;
    res.render('game', {
        name: user
    });
})

export default router;

