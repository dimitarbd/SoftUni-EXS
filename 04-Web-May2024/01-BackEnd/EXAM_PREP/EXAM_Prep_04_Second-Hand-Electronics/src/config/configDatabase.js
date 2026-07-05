const mongoose = require('mongoose');
require('../models/User');
require('../models/Electronics'); 

async function configDatabase() {
    const connectionString = 'mongodb://localhost:27017/second-hand-el';

    await mongoose.connect(connectionString);

    console.log('Database connected!');
}

module.exports = { configDatabase };