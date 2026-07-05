const { TechStore } = require('../models/TechStore');
const { User } = require('../models/User');

async function getAll() {
    return TechStore.find().lean();
}

async function getRecent() {
    return TechStore.find().sort({ $natural: -1 }).limit(3).lean();
}

async function getByAuthorId(authorId) {
    return TechStore.find({ author:authorId }).lean();
}

async function getMyPreferred(userId) {
    return TechStore.find({ preferredList: userId }).lean();
}

async function getMyCreatedDevices(userId) {
    return TechStore.find({ author: userId }).lean();
}

async function getById(id) {
    return TechStore.findById(id).lean();
}

// async function getUserName(identity) {
//     const user = await User.findOne({ 'email': identity });
//     const name = user.name;
    
//     return name;
// }

async function create(data, authorId) {
    const record = new TechStore({
        brand: data.brand,
        model: data.model,
        hardDisk: data.hardDisk,
        screenSize: data.screenSize,
        ram: data.ram,
        operatingSystem: data.operatingSystem,
        cpu: data.cpu,
        gpu: data.gpu,
        price: data.price,
        color: data.color,
        weight: data.weight,
        image: data.image,
        author: authorId,
    });

    await record.save();

    return record;
}

async function update(id, data, userId) {
    const record = await TechStore.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied');
    }

        record.brand = data.brand,
        record.model = data.model,
        record.hardDisk = data.hardDisk,
        record.screenSize = data.screenSize,
        record.ram = data.ram,
        record.operatingSystem = data.operatingSystem,
        record.cpu = data.cpu,
        record.gpu = data.gpu,
        record.price = data.price,
        record.color = data.color,
        record.weight = data.weight,
        record.image = data.image,

    await record.save();

    return record;
}

async function addToPreferredList(dataId, userId) {
    const record = await TechStore.findById(dataId);
    
    if (!record) {
        throw new ReferenceError('Record not found ' + dataId);
    }

    record.preferredList.push(userId);

    await record.save();

    return record;
}

async function deleteById(id, userId) {
    const record = await TechStore.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied');
    }

    await TechStore.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    getById,
    update,
    deleteById,
    create,
    addToPreferredList,
    getByAuthorId, 
    getRecent,
    getMyPreferred,
    getMyCreatedDevices,
    // getUserName
};