const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Importing other models
const PaymentMethods = require('./paymentMethods');

// Category Schema
const PaymentMethodFieldSchema = new Schema({
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
    name: {
        type: String,
        required: [true, 'Payment Method Field name is required.'],
        minlength: [3, 'Payment Method Field name too short. Min 4 chars'],
        maxlength: [3, 'Payment Method Field name too long. Max 16 chars'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        default: this.name + ' is a type of category.',
        minlength: [4, 'Payment Method Field description short. Min 4 chars.'],
        maxlength: [160, 'Payment Method Field description too long. Max 160 chars.'],
        trim: true
    }
}, {
    timestamps: true
});

const PaymentMethodFields = mongoose.model('paymentMethodFields', PaymentMethodFieldSchema);
module.exports = PaymentMethodFields;