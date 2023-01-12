import express from 'express';
const router = express.Router();

let result = "";

router.post('/', (req, res) => {
    const name = req.app.locals.name;

    const weapon = req.body.weapon;
    const player = req.app.locals.player;
    player.playerWeapon = weapon;
    const battle = req.app.locals.battle;

    result = battle.checkWinner(player.playerWeapon, battle.computerWeapon);

    res.redirect('/winner');
})

router.get('/', (req, res) => {
    res.render('winner', {
        playerWeapon: req.app.locals.player.playerWeapon,
        computerWeapon: req.app.locals.battle.computerWeapon,
        result: result,
        name: req.app.locals.name
    })

})

export default router;