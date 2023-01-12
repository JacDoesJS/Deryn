import { expect } from 'chai';
import chai from 'chai';

import chaiHttp from 'chai-http';
import server from '../../server.js';

chai.use(chaiHttp);

it(`1a tests that server is connected`, async () => {

    const res = await chai.request(server).get(`/`).send();

    expect(res).to.have.status(200);

});
