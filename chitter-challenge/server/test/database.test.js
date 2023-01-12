import Peep from '../src/peepModel.js';

import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../../backend/server.js';
import testData from './testData/samplePeeps.json' assert { type: "json" };
const testDataArray = testData.peeps;

chai.use(chaiHttp);


describe(`Testing requests on the database`, () => {

    beforeEach(async () => {
        try {
            await Peep.deleteMany();
            console.log(`Database cleared`);
        } catch (error) {
            console.log(`Error clearing`);
            throw new Error();
        };
        try {
            await Peep.insertMany(testDataArray);
            console.log(`Database populated with test Peeps`);
        } catch (error) {
            console.log(`Error inserting`);
            throw new Error();
        };
    });

    it(`should return all peeps`, async () => {
        const res = await chai.request(server)
            .get(`/allPeeps`)
            .send();

        expect(res).to.have.status(200);
        expect(res.body).to.be.an(`array`)
        expect(res.body.length).to.equal(testDataArray.length);
    });


    it(`should not create a peep without a message field`, async () => {
        let peep = {
            peepDateCreated: `2019-05-27T00:00:00.000Z`,
        };

        const res = await chai.request(server)
            .post(`/addPeep`)
            .send(peep);
        expect(res).to.have.status(422);
        expect(res).to.have.property(`error`);
        expect(res.text).to.be.eql(`I'm sorry your peep was unsuccessful`);
    });


});



