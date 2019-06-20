const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Importing other models
const Categories = require('./categories');
const Currencies = require('./currencies');

// Users Schema
const UserSchema = new Schema({
    _firebaseId: {
        type: String,
        required: [true, 'Firebase Id is required.'],
        unique: true,
        trim: true
    },
    username: {
        type: String,
        required: [true, 'Username is required.'],
        minlength: [4, 'Username too short. Min 4 chars'],
        maxlength: [16, 'Username too long. Max 16 chars'],
        unique: true,
        trim: true
    },
    displayName: {
        type: String,
        required: [true, 'Username is required.'],
        minlength: [1, 'Display Name too short. Min 1 chars'],
        maxlength: [32, 'Display Name too long. Max 32 chars'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        trim: true
    },
    status: {
        type: String,
        maxlength: [160, 'Status too long. Max 160 chars'],
        default: 'Hello I am using Cyphrum!',
        trim: true

    },
    categoryId: {
        type: String,
        validate: {
            isAsync: true,
            validator: (val, cb) => {
                Categories.find({_id: val}, (err, res) => {
                    cb(res.length > 0);
                });
            },
            message: 'Invalid Category ID. Please enter a valid Category ID.'
        },
        required: [true, 'Category ID is required.'],
        trim: true
    },
    homeAddress: {
        type: String,
        minlength: [4, 'Home Address too short. Min 4 chars'],
        maxlength: [32, 'Home Address too long. Min 32 chars'],
        required: [true, 'Home address is required.'],
        trim: true
    },
    homeAddressGeoLocation: String,
    workAddress: {
        type: String,
        minlength: [4, 'Work Address too short. Min 4 chars'],
        maxlength: [32, 'Work Address too long. Min 32 chars'],
        required: [true, 'Work address is required.'],
        trim: true
    },
    workAddressGeoLocation: String,
    defaultUserPaymentMethodId: {
        type: String,
        validate: {
            isAsync: true,
            validator: (val, cb) => {
                UserPaymentMethods.find({_id: val}, (err, res) => {
                    cb(res.length > 0);
                });
            },
            message: 'Invalid User Payment Method ID. Please enter a valid User Payment Method ID.'
        },
        required: [true, 'Default Payment Method address is required.'],
        trim: true
    },
    balance: {
        type: Number,
        default: 0
    },
    defaultCurrencyId: {
        type: String,
        validate: {
            isAsync: true,
            validator: (val, cb) => {
                Currencies.find({_id: val}, (err, res) => {
                    cb(res.length > 0);
                });
            },
            message: 'Invalid Currency ID. Please enter a valid Currency ID.'
        },
        required: [true, 'Default Currency is required.'],
        trim: true
    },
    profilePicURL: {
        type: String,
        default: 'img.jpg'
    },
    rating: {
        type: Number,
        default: 0,
        min: [0, 'Rating can\'t be negative.'],
        max: [10, 'Rating can\'t be greater than 10.']
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    lastLoginToken: String
}, {
    timestamps: true
});

const Users = mongoose.model('users', UserSchema);
module.exports = Users;