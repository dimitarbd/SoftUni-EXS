const { Schema, model, Types } = require('mongoose');

const glowAlchemySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    skin: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    benefits: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    recommendList: {
        type: [Types.ObjectId],
        required: true,
        default: []
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const GlowAlchemy = model('GlowAlchemy', glowAlchemySchema);

module.exports = { GlowAlchemy };
