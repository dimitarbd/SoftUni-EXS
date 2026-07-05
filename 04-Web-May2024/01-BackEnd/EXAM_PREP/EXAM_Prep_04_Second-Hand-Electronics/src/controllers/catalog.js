const { Router } = require('express');

const { getAll, getById, searchProducts } = require('../services/electronics');

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
    product.isAuthor = req.user?._id == product.owner.toString();
    product.hasBought = Boolean(product.buyingList.find(v => v.toString() == req.user?._id));


    res.render('details', { product });
});

catalogRouter.get('/search', async (req, res) => {
    const { name, type } = req.query;

    const products = await searchProducts(name, type);

    res.render('search', { data: { name, type}, products });
});

module.exports = { catalogRouter };