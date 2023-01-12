import express from 'express';
import PeepModel from '../src/peepModelA.js'
export const router = express.Router();
router.use(express.json());

router.route(`/`)

router.get(`/`, async (req, res) => {
    const { allPeeps } = req.body

    try {
        const peepsList = await PeepModel.find({}).sort({ peepDateCreated: -1 })
        res.status(200).json(peepsList)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

});


export { router as allPeeps };



