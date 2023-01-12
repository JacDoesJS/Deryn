import express from 'express';
import PeepModel from '../src/peepModelA.js'
export const router = express.Router();
router.use(express.json());

router.post(`/`, async (req, res) => {
    const { peepMessage } = req.body

    try {
        const addPeep = await PeepModel.create({ peepMessage })
        res.status(201).json(addPeep)

    } catch (error) {
        res.status(422).send(`I'm sorry your peep was unsuccessful`)
    }
});

export { router as addPeep };



