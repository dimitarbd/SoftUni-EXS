const { Electronics } = require('../models/Electronics');

//TODO replace with real data service accordin to exam description

async function getAll() {
    return Electronics.find().lean();
}

async function getById(id) {
    return Electronics.findById(id).lean();
}

async function getByAuthorId(authorId) {
    return Electronics.find({ owner: authorId }).lean();
}

async function getMyShoppingList(userId) {
    return Electronics.find({ buyingList: userId }).lean();
}

async function create(data, authorId) {
    const record = new Electronics({
        name: data.name,
        type: data.type,
        damages: data.damages,
        image: data.image,
        description: data.description,
        production: data.production,
        exploitation: data.exploitation,
        price: data.price,
        owner: authorId
    });

    await record.save();

    return record;
}

async function update(id, data, userId) {
    const record = await Electronics.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.owner.toString() != userId) {
        throw new Error('Access denied');
    }

    record.name = data.name;
    record.type = data.type;
    record.damages = data.damages;
    record.image = data.image;
    record.description = data.description;
    record.production = data.production;
    record.exploitation = data.exploitation;
    record.price = data.price;

    await record.save();

    return record;
}

async function addToShoppingList(dataId, userId) {
    const record = await Electronics.findById(dataId);

    if (!record) {
        throw new ReferenceError('Product not found ' + dataId);
    }

    record.buyingList.push(userId);

    await record.save();

    return record;
}

async function deleteById(id, userId) {
    const record = await Electronics.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.owner.toString() != userId) {
        throw new Error('Access denied');
    }

    await Electronics.findByIdAndDelete(id);
}

async function searchProducts(name, type) {
    const query = {};

    if (name) {
        query.name = new RegExp(name, 'i');
    }

    if (type) {
        query.type = new RegExp(type, 'i');
    }

    return Electronics.find(query).lean();

}

module.exports = {
    getAll,
    getById,
    update,
    deleteById,
    create,
    addToShoppingList,
    getByAuthorId,
    getMyShoppingList,
    searchProducts
};