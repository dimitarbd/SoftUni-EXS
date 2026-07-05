const { Router } = require('express');
const { getAll, getById, update, deleteById, addVote } = require('../services/volcano');
const { isUser } = require('../middlewares/guards');
const { body, validationResult } = require('express-validator');
const { register } = require('../services/user');
const { createToken } = require('../services/jwt');
const { parseError } = require('../util');
const { create } = require('express-handlebars');

const volcanoRouter = Router();

volcanoRouter.get('/create', isUser(), (req, res) => {
    res.render('create');
});

volcanoRouter.post('/create', isUser(),
    body('name').trim().isLength({ min: 2 }),
    body('location').trim().isLength({ min: 3 }),
    body('elevation').trim().isInt({ min: 0 }),
    body('lastErruption').trim().isInt({ min: 0, max: 2024 }),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }),
    body('typeVolcano').trim(),
    body('description').trim().isLength({ min: 10 }),
    async (req, res) => {
        const userId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await create();

            res.redirect('/');

        } catch (err) {
            res.render('create', { data: req.body, errors: parseError(err).errors });
        }
    });

    volcanoRouter.get('/edit/:id', isUser(), async (req, res) => {
        const id =  req.params.id;

        const volcano = await getById(id);

        if (!volcano) {
            res.status(404).render('404');
            return;
        }

        if (volcano.author.toString() != req.user._id) {
            res.redirect('/login');
        }

        res.render('edit', { data: volcano });
    });
    
    volcanoRouter.post('/edit/:volcanoId', isUser(),
        body('name').trim().isLength({ min: 2 }),
        body('location').trim().isLength({ min: 3 }),
        body('elevation').trim().isInt({ min: 0 }),
        body('lastErruption').trim().isInt({ min: 0, max: 2024 }),
        body('image').trim().isURL({ require_tld: false, require_protocol: true }),
        body('typeVolcano').trim(),
        body('description').trim().isLength({ min: 10 }),
        async (req, res) => {
            const volcanoId = req.params.volcanoId;
            const userId = req.user._id;
    
            try {
                const validation = validationResult(req);
    
                if (validation.errors.length) {
                    throw validation.errors;
                }
    
                const result = await update(volcanoId, req.body, userId);
    
                res.redirect('/catalog/' + volcanoId);
    
            } catch (err) {
                res.render('edit', { data: req.body, errors: parseError(err).errors });
            }
        });

        volcanoRouter.get('/delete/:id', isUser(), async (req, res) => {
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

        volcanoRouter.get('/vote/:volcanoId', isUser(), async (req, res) => {
            const volcanoId = req.params.volcanoId;
            const userId = req.user._id;
    
            try {   
                const result = await addVote(volcanoId, userId);
    
                res.redirect('/catalog/' + volcanoId);
    
            } catch (err) {
                res.render('details', { errors: parseError(err).errors });
            }
        });

module.exports = { volcanoRouter };

