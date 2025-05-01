import { Router } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import partyModel from '../models/party-model.js';
import partyValidationSchema from "../validation/party-validation.js";
import authToken from "../middlewares/token.js";
import mongoose from "mongoose";
import userModel from "../models/user-model.js";


const router = Router();

const createParty = async (req, res) => {
    //Validate the request body against the schema
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const data = matchedData(req);

    try {
        console.log(req.user._id);
        const newParty = new partyModel({
            host_id: req.user._id,
            name: data.name,
            city: data.city,
            address: data.address,
            date_time: data.date_time,
        });
        newParty.participants.push(req.user._id);
        await newParty.save();
        return res.status(200).json({ message: 'New Party Created' });
    }
    catch (err) {
        return res.status(400).json({ message: 'Internal Server Error', err });
    }
}

const nearestParties = async (req, res) => {
    try {
        const user = await userModel.findById({ _id: req.user._id });
        const parties = await partyModel.find({ city: user.city });
        if (parties.length !== 0) {
            res.status(200).json(parties);
        }
        else {
            res.status(404).json({ message: 'No Parties found at your location' });
        }
    }
    catch (err) {
        return res.status(404).json({ message: 'User not found', err })
    }
}

const joinParty = async (req, res) => {
    try {
        const userId = req.user._id;
        const partyId = req.params.partyId;
        const party = await partyModel.findById({ _id: partyId });

        if (party.participants.find(user => user !== userId)) {
            party.participants.push(userId);
            await party.save();
            return res.status(200).json({ message: 'Party joined successfully' });
        }
        else {
            return res.status(400).json({ message: 'Party already joined' });
        }
    }
    catch {
        return res.status(400).json({ message: 'Unable to join party' });
    }
}

router.post('/create', authToken, checkSchema(partyValidationSchema), createParty);
router.get('/nearest', authToken, nearestParties);
router.put('/join/:partyId', authToken, joinParty);

export default router;