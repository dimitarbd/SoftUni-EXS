const mongoose = require('mongoose');
require('../models/User');
require('../models/GlowAlchemy'); 

async function configDatabase() {
    
    const connectionString = 'mongodb://localhost:27017/glow-alchemy';

    await mongoose.connect(connectionString);

    console.log('Database connected!');
}

module.exports = { configDatabase };