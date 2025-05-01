import { ExpressValidator } from "express-validator";

const partyValidationSchema = {
    name: {
        isString: true,
        errorMessage: 'Invalid name',
    },
    city: {
        isString: true,
        errorMessage: 'Invalid city',
    },
    address: {
        isString: true,
        errorMessage: 'Invalid address',
        isLength: {
            options: { min: 8 },
            errorMessage: 'Address should be at least 8 chars',
        },
    },

    date_time: {
        isString: true,
        errorMessage: 'Invalid date',
    }
}

export default partyValidationSchema;