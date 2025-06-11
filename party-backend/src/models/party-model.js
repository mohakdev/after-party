import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
    guest_id: { type: String },
    tickets: { type: Number }
})

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
    ticket_price: {
        type: Number,
        required: true,
    },
    ticket_quantity: {
        type: Number,
        required: false,
    },
    participants: [participantSchema],
})

export default mongoose.model('Party', partySchema);