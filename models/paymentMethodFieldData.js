const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Importing other models
const PaymentMethodFields = require('./paymentMethodFields');
const Users = require('./users');

// Category Schema
const UserPaymentMethodSchema = new Schema({
    paymentMethodFieldId: {
        type: String,
        validate: {
            isAsync: true,
            validator: (val, cb) => {
                PaymentMethodFields.find({_id: val}, (err, res) => {
                    cb(res.length > 0);
                });
            },
            message: 'Invalid Payment Method Field ID. Please enter a valid Payment Method Field ID.'
        },
        required: [true, 'Payment Method Field ID is required.'],
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
    },
    value: {
        type: String,
        required: [true, 'Payment Method Field Data is required.'],
        trim: true
    }
}, {
    timestamps: true
});

const UserPaymentMethods = mongoose.model('userPaymentMethods', UserPaymentMethodSchema);
module.exports = UserPaymentMethods;