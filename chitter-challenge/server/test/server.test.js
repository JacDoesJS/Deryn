import { expect } from 'chai';
import chai from 'chai';

import chaiHttp from 'chai-http';
import server from '../../backend/server.js';

chai.use(chaiHttp);

describe(`server testing`, async () => {
    it(`1a tests that server is connected`, async () => {

        const res = await chai.request(server).get(`/allPeeps`).send();

        expect(res).to.have.status(200);

    });
});