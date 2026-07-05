const mongoose = require('mongoose');
require('../models/User');
require('../models/CourseBook'); 

async function configDatabase() {
    const connectionString = 'mongodb://localhost:27017/course-book';

    await mongoose.connect(connectionString);

    console.log('Database connected!');
}

module.exports = { configDatabase };