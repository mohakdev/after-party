import mongoose from "mongoose";

const partySchema = new mongoose.Schema({
    host_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    date_time: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    participants: {
        type: [String],
        required: false,
    }
})

export default mongoose.model('Party', partySchema);