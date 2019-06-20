const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Currency Schema
const CurrencySchema = new Schema({
    code: {
        type: String,
        required: [true, 'Currency 3 Character code is required.'],
        minlength: [3, 'Currency code too short. Must be 4 chars.'],
        maxlength: [3, 'Currency code too long. Must be 4 chars.'],
        unique: true,
        uppercase: true,
        trim: true
    },
    name: {
        type: String,
        required: [true, 'Currency Name is required.'],
        unique: true,
        trim: true
    }
}, {
    timestamps: true
});

const Currencies = mongoose.model('currencies', CurrencySchema);
module.exports = Currencies;