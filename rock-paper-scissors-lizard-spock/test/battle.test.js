import { expect } from 'chai';

import Battle from '../src/battle.js';
import Player from '../src/player.js';

describe(`weapons  and winner testing`, () => {

    let result = '';

    it(`2b tests that correct player weapon is stored for battle`, async () => {

        const testPlayer = new Player('Jac', 'rock');
        const testPlayer2 = new Player("Martin", "scissors");
        const testPlayer3 = new Player("Harvey", "paper")

        expect(testPlayer3.playerWeapon).to.be.equal('paper');
    });

    it(`3 tests that a draw is returned if both choose the same weapon`, async () => {

        const testPlayer = new Player('Jac', 'rock');
        const testBattle = new Battle();
        let computerWeapon = 'rock';

        result = testBattle.checkWinner();

        expect(result).to.be.equal('It\'s a draw!');

        computerWeapon = null;
        result = '';
    });

    it(`3 tests that a win is returned`, async () => {

        const testPlayer3 = new Player('Jac', 'Spock');
        const testBattle3 = new Battle();
        const computerWeapon = 'lizard';

        result = testBattle3.checkWinner('Spock', 'lizard');

        expect(result).to.include('poisons');
    });

    it(`3c tests that a win is returned`, async () => {

        const testPlayer4 = new Player('James', 'rock');
        const testBattle3 = new Battle();
        const computerWeapon = 'Spock';

        result = testBattle3.checkWinner('rock', 'Spock');

        expect(result).to.include('vaporises');
    });

});