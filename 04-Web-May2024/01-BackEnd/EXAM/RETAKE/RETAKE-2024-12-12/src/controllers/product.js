const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { getById, create, update, deleteById, addToPreferredList, addToRecommendList } = require('../services/glowAlchemy');
const { isUser } = require('../middlewares/guards');
const { parseError } = require('../util');


const productRouter = Router();

productRouter.get('/create', isUser(), (req, res) => {
    res.render('create');
});

productRouter.post('/create', isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('The Name should be at least 2 characters!'),
    body('skin').trim().isLength({ min: 10, max: 100 }).withMessage('The Skin should be between 10 and 100 characters long!'),
    body('description').trim().isLength({ min: 20, max: 200 }).withMessage('The Description should be between 20 and 200 characters long!'),
    body('ingredients').trim().isLength({ min: 2, max: 50 }).withMessage('The Ingredients should be between 2 and 50 characters long!'),
    body('benefits').trim().isLength({ min: 10, max: 100 }).withMessage('The Benefits should be between 10 and 100 characters long!'),
    body('price').trim().isInt({ min: 0 }).withMessage('The Price should be a positive number!'),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('The Image should start with http:// or https:\//!'),
    async (req, res) => {
        const userId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }
            const result = await create(req.body, userId)

            res.redirect('/');
        } catch (err) {
            res.render('create', { data: req.body, errors: parseError(err).errors })
        }
    });

productRouter.get('/edit/:id', isUser(), async (req, res) => {
    const id = req.params.id;

    const product = await getById(id);

    if (!product) {
        res.status(404).render('404')
        return;
    }

    if (product.owner.toString() != req.user._id) {
        res.redirect('/login');
    }

    product.ingredients = Array.isArray(product.ingredients) ? product.ingredients.join(' / ') : product.ingredients;

    res.render('edit', { data: product });
});

productRouter.post('/edit/:productId', isUser(),
    body('name').trim().isLength({ min: 2 }),
    body('skin').trim().isLength({ min: 10, max: 100 }),
    body('description').trim().isLength({ min: 20, max: 200 }),
    body('ingredients').trim().isLength({ min: 2, max: 50 }),
    body('benefits').trim().isLength({ min: 10, max: 100 }),
    body('price').trim().isInt({ min: 0 }),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }),
    async (req, res) => {
        const productId = req.params.productId;
        const userId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }
            const result = await update(productId, req.body, userId)

            res.redirect('/catalog/' + productId);
        } catch (err) {
            res.render('edit', { data: req.body, errors: parseError(err).errors })
        }
    });

productRouter.get('/delete/:id', isUser(), async (req, res) => {
    const id = req.params.id;

    try {
        await deleteById(id, req.user._id)
    } catch (err) {
        if (err.message == 'Access denied') {
            res.redirect('/login');
            return;
        }
    }

    res.redirect('/catalog/');
});

productRouter.get('/recommend/:productId', isUser(), async (req, res) => {
    const productId = req.params.productId;
    const userId = req.user._id;

    try {
        const result = await addToRecommendList(productId, userId)

        res.redirect('/catalog/' + productId);
    } catch (err) {
        res.render('details', { errors: parseError(err).errors })
    }
});

module.exports = { productRouter }
