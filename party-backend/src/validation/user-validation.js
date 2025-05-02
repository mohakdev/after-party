const userValidationSchema = {
    name: {
        isString: true,
        isLength: {
            options: { min: 4 },
            errorMessage: 'Name should be min 4 letters',
        },
        errorMessage: 'Invalid Name format',
    },
    email: {
        isEmail: true,
        errorMessage: 'Invalid email format',
    },
    password: {
        isString: true,
        isLength: {
            options: { min: 8 },
            errorMessage: 'Password should be at least 8 chars',
        },
    },
    city: {
        isString: true,
        isLength: {
            options: { min: 3 },
        },
        errorMessage: 'Invalid City name',
    }
}

export default userValidationSchema;