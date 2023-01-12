import { expect } from 'chai';
import chai from 'chai';

import server from '../../server.js';

describe(`testing again route`, async () => {

    it(`4e tests that a successful post request is made to the again route`, async () => {

        const res = await chai.request(server).post(`/again`).send();

        expect(res).to.have.status(200);

    });

    it(`4f tests that a successful get request is made to the again route`, async () => {

        const res = await chai.request(server).get(`/again`).send();

        expect(res).to.have.status(200);

    });



})
