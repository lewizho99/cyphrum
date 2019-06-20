const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Category Schema
const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Category name is required.'],
        minlength: [2, 'Category name too short. Min 2 chars.'],
        maxlength: [16, 'Category name too long. Max 16 chars.'],
        unique: true,
        uppercase: true,
        trim: true
    },
    description: {
        type: String,
        default: this.name + ' is a type of category.',
        minlength: [4, 'Category description short. Min 4 chars.'],
        maxlength: [160, 'Category description too long. Max 160 chars.'],
        trim: true
    }
}, {
    timestamps: true
});

const Categories = mongoose.model('categories', CategorySchema);
module.exports = Categories;