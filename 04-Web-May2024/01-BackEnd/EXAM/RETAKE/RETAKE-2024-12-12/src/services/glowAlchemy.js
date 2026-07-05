const { GlowAlchemy } = require('../models/GlowAlchemy');

async function getAll() {
    return GlowAlchemy.find().lean();
} 

async function getRecent() {
    return GlowAlchemy.find().sort({ $natural: -1 }).limit(3).lean();
}

async function getById(id) {
    return GlowAlchemy.findById(id).lean();
}

async function create(data, authorId) {
    const record = new GlowAlchemy({
        name: data.name,
        skin: data.skin,
        description: data.description,
        ingredients: data.ingredients.split(","),
        benefits: data.benefits,
        price: data.price,
        image: data.image,
        owner: authorId
    });

    await record.save();

    return record;
}

async function update(id, data, userId) {
    const record = await GlowAlchemy.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.owner.toString() != userId) {
        throw new Error('Access denied');
    }

    record.name = data.name;
    record.skin = data.skin;
    record.description = data.description;
    record.ingredients = data.ingredients.split(",");
    record.benefits = data.benefits;
    record.price = data.price;
    record.image = data.image;

    await record.save();

    return record;
}

async function deleteById(id, userId) {
    const record = await GlowAlchemy.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.owner.toString() != userId) {
        throw new Error('Access denied');
    }

    await GlowAlchemy.findByIdAndDelete(id);
}

async function searchProducts(name) {
    const query = {};

    if(name) {
        query.name = new RegExp(name, 'i');
    }

    return GlowAlchemy.find(query).lean();

}

async function addToRecommendList(productId, userId) {
    const record = await GlowAlchemy.findById(productId);

    if (!record) {
        throw new ReferenceError('Record not found ' + productId);
    }

    if (record.owner.toString() == userId) {
        throw new Error('Cannot vote for your own product');
    }

    if (record.recommendList.find(v => v.toString() == userId)) {
        throw new Error('Only one vote is allowed per product');
    }

    record.recommendList.push(userId);

    await record.save();

    return record;
}

module.exports = {
    getAll,
    getById,
    update,
    deleteById,
    create,
    getRecent,
    searchProducts,
    addToRecommendList
};