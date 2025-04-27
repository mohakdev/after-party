import { Router } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import userValidationSchema from "../validation/user-validation.js";
import userModel from "../models/user-model.js";
import jwt from "jsonwebtoken";
import config from "../config.js";

const router = Router();

const handleRegistration = async (req, res) => {
    //Validate the request body against the schema
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const data = matchedData(req);

    const isUser = await userModel.findOne({ email: data.email });
    //Check if the user already exists
    if (isUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    //Create a new user
    const newUser = new userModel({
        email: data.email,
        password: data.password,
        location: req.body.location,
    });
    console.log(newUser);
    //Save the user to the database
    await newUser.save();
    const accessToken = jwt.sign({ _id: newUser._id, email: newUser.email, location: newUser.location }, config.jwtKey, { expiresIn: '1h' });
    return res.status(201).json({ message: 'User created successfully', accessToken });
}
const handleLogin = async (req, res) => {
    //Validate the request body against the schema
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const data = matchedData(req);
    const isUser = await userModel.findOne({ email: data.email });
    //Check if the user already exists
    if (isUser) {
        //Check if the password is correct
        if (data.password === isUser.password) {
            //Successfully logged in!
            return res.status(200).json(isUser);
        }
        return res.status(401).json({ message: "Password is incorrect!" });
    }
    else {
        return res.status(404).json({ message: 'User not found!' });
    }
}
router.post('/login', checkSchema(userValidationSchema), handleLogin);
router.post('/register', checkSchema(userValidationSchema), handleRegistration);

export default router;