import User from '../src/userModelA.js';

import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../../backend/server.js';
import testUserData from './testData/sampleUserData.json' assert { type: "json" };
const testUserDataArray = testUserData.users;

chai.use(chaiHttp);


describe(`Testing requests on the users database collection`, () => {

    beforeEach(async () => {
        try {
            await User.deleteMany();
            console.log(`Database cleared`);
        } catch (error) {
            console.log(`Error clearing`);
            throw new Error();
        };
        try {
            await User.insertMany(testUserDataArray);
            console.log(`Database populated with test Users`);
        } catch (error) {
            console.log(`Error inserting`);
            throw new Error();
        };
    });

    describe(`/POST register`, () => {


        // it(`should create a user that is properly formed`, async () => {
        //     let user = {
        //         "_id": "41266x0883439521",
        //         "name": "Jane Bloggs.",
        //         "password": "passing",

        //     };

        //     const res = await chai.request(server)
        //         .post(`/register`)
        //         .send(user)

        //     console.log(res.body);
        //     expect(res).to.have.status(201);
        //     expect(res.body).to.be.an(`object`);
        //     expect(res.body.user).to.have.property(password, user.password);
        // });

        it(`should recognise a user that already exists`, async () => {
            let user = {
                "_id": "13266p0883439529",
                "name": "Harvey Hound.",
                "password": "woof"
            };

            const res = await chai.request(server)
                .post(`/register`)
                .send(user);
            expect(res).to.have.status(422);
            expect(res).to.have.property(`error`);
            expect(res.text).to.be.eql(`user already exists`);

        });

        it(`should make a successful request to the register route`, async () => {

            const res = await chai.request(server)
                .post(`/register`)
                .send();
            expect(res).to.have.status(200);

        });


    });
});


