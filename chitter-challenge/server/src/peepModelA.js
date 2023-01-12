import mongoose from 'mongoose';

const peepSchema = new mongoose.Schema({
    peepMessage: { type: String, required: true },
    peepDateCreated: {
        type: Date,
        default: Date.now,
        required: true
    },
    name: String,
    userHandle: String

});

const Peep = mongoose.model(`Peep`, peepSchema);

export default Peep;