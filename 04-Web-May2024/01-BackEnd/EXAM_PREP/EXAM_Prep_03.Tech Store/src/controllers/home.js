const { Router } = require('express');
const { getRecent } = require('../services/techStore');

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const products = await getRecent();
    
    res.render('home', { products });
});

homeRouter.get('/about', async (req, res) => {
    res.render('about');
});

module.exports = { homeRouter };