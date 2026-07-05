const { Router } = require('express');
const { createToken } = require('../services/jwt');
const { login } = require('../services/user');
const { getRecent } = require('../services/glowAlchemy');

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const products = await getRecent();   

    res.render('home', { products });
});

module.exports = { homeRouter };