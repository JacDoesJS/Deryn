import express from 'express';
import mongoose from 'mongoose';
import PeepModel from '../src/peepModelA.js'
export const router = express.Router();
router.use(express.json());

router.get(`/:id`, async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "ID not valid - can't find that peep." })
    }
    const peepItem = await PeepModel.findById(id)

    if (!peepItem) {
        return res.status(404).json({ error: "can't find that peep" })
    }

    res.status(200).json(peepItem)

});

// router.delete(`/`, async (req, res) => {
//     const { id } = req.params

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ error: "ID not valid - can't find that peep." })
//     }
//     const peepItem = await PeepModel.findOneAndDelete({ _id: id })

//     if (!peepItem) {
//         return res.status(404).json({ error: "can't find that peep" })
//     }
//     res.status(200).json(peepItem)
// });

router.patch(`/`, async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "ID not valid - can't find that peep." })
    }
    const peepItem = await PeepModel.findOneAndUpdate({ _id: id },)

    if (!peepItem) {
        return res.status(404).json({ error: "can't find that peep" })
    }
    res.status(200).json(peepItem)
});

export { router as peepItem };



