const { Router } = require('express');
const { createToken } = require('../services/jwt');
const { login } = require('../services/user');
const { getRecent } = require('../services/recipe');

// TODO replace with real router according to exam description

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    console.log(req.user);
    const recipes = await getRecent();

    //This code creates a token and saves it in a cookie
    // const result = await login('John', '123456');
    // const token = createToken(result);
    // res.cookie('token', token);

    res.render('home', {recipes});
});

module.exports = { homeRouter };