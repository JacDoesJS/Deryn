import express from 'express';

const router = express.Router();

import User from '../src/userModelA.js';

router.route(`/`)
    .post((req, res) => {
        const { email } = req.body;

        User.findOne({ email }, (err, user) => {
            if (user) {
                res.send({ message: `user already exists` });
                res.status(400)
            }
            else {
                const user = new User(req.body);
                user.save(err => {
                    if (err) {
                        res.send(err);
                        res.status(400)
                    }
                    else {
                        res.send({ message: `successful` });
                        res.status(200)

                    }
                });
            }
        });
    });

export { router as register };