import { expect } from 'chai';
import chai from 'chai';

import chaiHttp from 'chai-http';
import server from '../../server.js';

chai.use(chaiHttp);

describe(`testing requests on game route`, async () => {

    it(`4a tests that a successful request is made to the game route`, async () => {
        const res = await chai.request(server).get(`/game`).send();
        expect(res).to.have.status(200);
    })


    it(`4b tests that a successful request is made to the game route`, async () => {
        const res = await chai.request(server).post(`/game`).send();
        expect(res).to.have.status(200);
    })
});
