const { Router } = require('express');

const { getAll, getById } = require('../services/techStore');

const catalogRouter = Router();

catalogRouter.get('/catalog', async (req, res) => {
    const products = await getAll();

    res.render('catalog', { products });
})

catalogRouter.get('/catalog/:id', async (req, res) => {
    const id = req.params.id;

    const product = await getById(id);

    if (!product) {
        res.status(404).render('404')
        return;
    }

    product.hasUser = res.locals.hasUser;
    product.isAuthor = Boolean(req.user?._id == product.author.toString());
    product.hasPreffered = Boolean(product.preferredList.find(v => v.toString() == req.user?._id));


    res.render('details', { product });
})

module.exports = { catalogRouter };