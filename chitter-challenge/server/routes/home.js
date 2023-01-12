import express from 'express';
import mongoose from 'mongoose';
export const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    res.json({ mssg: "GET to home page" });
})

export { router as home };