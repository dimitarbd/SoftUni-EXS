const { CourseBook } = require('../models/CourseBook');
const { User } = require('../models/User');

//TODO replace with real data service accordin to exam description

async function getAll() {
    return CourseBook.find().lean();
} 

async function getRecent() {
    return CourseBook.find().sort({ $natural: -1 }).limit(3).lean();
}

async function getByAuthorId(authorId) {
    return CourseBook.find({ owner:authorId }).lean();
}

async function getMySignUpList(userId) {
    return CourseBook.find({ signUpList: userId }).lean();
}

async function getMyCreatedCourse(userId) {
    return CourseBook.find({ owner: userId }).lean();
}

async function getById(id) {
    return CourseBook.findById(id).lean();
}

async function create(data, authorId) {
    const record = new CourseBook({
        title: data.title,
        type: data.type,
        certificate: data.certificate,
        image: data.image,
        description: data.description,
        price: data.price,
        owner: authorId
    });

    await record.save();

    return record;
}

async function update(id, data, userId) {
    const record = await CourseBook.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.owner.toString() != userId) {
        throw new Error('Access denied');
    }

    record.title = data.title;
    record.type = data.type;
    record.certificate = data.certificate;
    record.image = data.image;
    record.description = data.description;
    record.price = data.price;

    await record.save();

    return record;
}

async function 
addToSignUpList(dataId, userId) {
    const record = await CourseBook.findById(dataId);
    
    if (!record) {
        throw new ReferenceError('Record not found ' + dataId);
    }

    record.signUpList.push(userId);

    await record.save();

    return record;
}

async function deleteById(id, userId) {
    const record = await CourseBook.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.owner.toString() != userId) {
        throw new Error('Access denied');
    }

    await CourseBook.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    getById,
    update,
    deleteById,
    create,
    getRecent,
    getByAuthorId,
    getMySignUpList,
    addToSignUpList,
    getMyCreatedCourse
};