const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Category Schema
const PaymentMethodSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Payment Method name is required.'],
        minlength: [3, 'Payment Method too short. Min 4 chars'],
        maxlength: [3, 'Payment Method too long. Max 16 chars'],
        unique: true,
        uppercase: true,
        trim: true
    },
    description: {
        type: String,
        default: this.name + ' is a type of category.',
        minlength: [4, 'Payment Method description short. Min 4 chars.'],
        maxlength: [160, 'Payment Method description too long. Max 160 chars.'],
        trim: true
    }
}, {
    timestamps: true
});

const PaymentMethods = mongoose.model('paymentMethods', PaymentMethodSchema);
module.exports = PaymentMethods;