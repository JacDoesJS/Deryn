import { expect } from 'chai';
import chai from 'chai';

import server from '../../server.js';
import Player from '../src/player.js';

describe(`testing weapon choices`, async () => {

    it(`2b tests that player weapon choice is stored`, async () => {

        const testPlayer = new Player('Jac', 'rock');
        const testPlayer2 = new Player('Jac', 'paper');
        const testPlayer3 = new Player('Jac', 'scissors');
        console.log(testPlayer.playerWeapon);

        expect(testPlayer3.playerWeapon).to.equal('scissors');

    });

    it(`4c tests that a successful post request is made to the winner route`, async () => {

        const res = await chai.request(server).post(`/winner`).send();

        expect(res).to.have.status(200);

    });

    it(`4d tests that a successful get request is made to the winner route`, async () => {

        const res = await chai.request(server).get(`/winner`).send();

        expect(res).to.have.status(200);

    });



})
