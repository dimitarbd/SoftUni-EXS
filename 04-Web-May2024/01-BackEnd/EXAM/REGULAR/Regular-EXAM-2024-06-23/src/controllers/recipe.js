const { Router } = require('express');
const { getAll, getById, update, deleteById, addRecommend } = require('../services/recipe');
const { isUser } = require('../middlewares/guards');
const { body, validationResult } = require('express-validator');
const { register } = require('../services/user');
const { createToken } = require('../services/jwt');
const { parseError } = require('../util');
const { create } = require('../services/recipe');

const recipeRouter = Router();

recipeRouter.get('/create', isUser(), (req, res) => {
    res.render('create');
});

recipeRouter.post('/create', isUser(),
    body('title').trim().isLength({ min: 2 }),
    body('ingredients').trim().isLength({ min: 10, max: 200 }),
    body('instructions').trim().isLength({ min: 10 }),
    body('description').trim().isLength({ min: 10, max: 100 }),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }),
    
    async (req, res) => {
        const userId = req.user._id;
        const { title, ingredients, instructions, description, image } = req.body;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await create({ title, ingredients, instructions, description, image }, userId);

            res.redirect('/catalog');

        } catch (err) {
            console.log(err);
            res.render('create', { data: req.body, errors: parseError(err).errors });
        }
    });

    recipeRouter.get('/edit/:id', isUser(), async (req, res) => {
        const id =  req.params.id;

        const recipe = await getById(id);

        if (!recipe) {
            res.status(404).render('404');
            return;
        }

        if (recipe.author.toString() != req.user._id) {
            res.redirect('/login');
        }

        res.render('edit', { data: recipe });
    });
    
    recipeRouter.post('/edit/:recipeId', isUser(),
    body('title').trim().isLength({ min: 2 }),
    body('ingredients').trim().isLength({ min: 10, max: 200 }),
    body('instructions').trim().isLength({ min: 10 }),
    body('description').trim().isLength({ min: 10, max: 100 }),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }),
        async (req, res) => {
            const recipeId = req.params.recipeId;
            const userId = req.user._id;
    
            try {
                const validation = validationResult(req);
    
                if (validation.errors.length) {
                    throw validation.errors;
                }
    
                const result = await update(recipeId, req.body, userId);
    
                res.redirect('/catalog/' + recipeId);
    
            } catch (err) {
                res.render('edit', { data: req.body, errors: parseError(err).errors });
            }
        });

        recipeRouter.get('/delete/:id', isUser(), async (req, res) => {
            const id =  req.params.id;
    
            try {
                await deleteById(id, req.user._id);
            } catch (err) {
                if(err.message == 'Access denied'){
                    res.redirect('/login');
                    return;
                }
                res.render('edit', { data: req.body, errors: parseError(err).errors });
            }
            res.redirect('/catalog');
        });

        recipeRouter.get('/recommend/:recipeId', isUser(), async (req, res) => {
            const recipeId = req.params.recipeId;
            const userId = req.user._id;
    
            try {   
                const result = await addRecommend(recipeId, userId);
    
                res.redirect('/catalog/' + recipeId);
    
            } catch (err) {
                res.render('details', { errors: parseError(err).errors });
            }
        });

module.exports = { recipeRouter };

