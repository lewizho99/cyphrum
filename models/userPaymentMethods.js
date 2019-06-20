const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Importing other models
const PaymentMethods = require('./paymentMethods');
const Users = require('./users');

// Category Schema
const UserPaymentMethodSchema = new Schema({
    paymentMethodId: {
        type: String,
        validate: {
            isAsync: true,
            validator: (val, cb) => {
                PaymentMethods.find({_id: val}, (err, res) => {
                    cb(res.length > 0);
                });
            },
            message: 'Invalid Payment Method ID. Please enter a valid Payment Method ID.'
        },
        required: [true, 'Payment Method ID is required.'],
        trim: true
    },
    userId: {
        type: String,
        validate: {
            isAsync: true,
            validator: (val, cb) => {
                Users.find({_id: val}, (err, res) => {
                    cb(res.length > 0);
                });
            },
            message: 'Invalid User ID. Please enter a valid User ID.'
        },
        required: [true, 'User ID is required.'],
        trim: true
    }
}, {
    timestamps: true
});

const UserPaymentMethods = mongoose.model('userPaymentMethods', UserPaymentMethodSchema);
module.exports = UserPaymentMethods;