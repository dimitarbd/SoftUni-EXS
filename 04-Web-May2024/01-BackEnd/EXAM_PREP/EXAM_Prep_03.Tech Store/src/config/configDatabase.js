const mongoose = require('mongoose');
require('../models/User');
require('../models/TechStore');

async function configDatabase() {
    const connectionString = 'mongodb://localhost:27017/tech-store';

    await mongoose.connect(connectionString);

    console.log('Database connected!');
}

module.exports = { configDatabase };