const { Router } = require('express');
const { getAll, getById, searchProducts } = require('../services/glowAlchemy');

const catalogRouter = Router();

catalogRouter.get('/catalog', async (req, res) => {
    const products = await getAll();

    res.render('catalog', { products });
});

catalogRouter.get('/catalog/:id', async (req, res) => {
    const id = req.params.id;

    const product = await getById(id);

    if (!product) {
        res.status(404).render('404');
        return;
    }
    
    product.recommends = product.recommendList.length;
    product.hasUser = res.locals.hasUser;
    product.isAuthor = req.user?._id == product.owner.toString();
    product.hasRecommend = Boolean(product.recommendList.find(v => v.toString() == req.user?._id));
    product.ingredients = Array.isArray(product.ingredients) ? product.ingredients.join(' / ') : product.ingredients;
    

    res.render('details', { product });
});

catalogRouter.get('/search', async (req, res) => {
    const { search } = req.query;

    const products = await searchProducts(search);

    res.render('search', { data: { search }, products });
});

module.exports = { catalogRouter };
