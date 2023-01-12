import express from 'express';
import userSchema from '../src/userModelA.js'

export const router = express.Router();
router.use(express.json());


// const login = () => {
router.route(`/`)
    .post((req, res) => {
        const { email, password } = req.body;

        userSchema.findOne({ email }, (err, user) => {
            if (user && password === user.password) {
                res.send({ message: `You are now logged in and can peep away.`, user });
                // res.status(201).json(login)
            }
            else {
                res.send({ message: `Unfortunately we cannot find those details.` });
            }
        });
    });
// }

export { router as login };