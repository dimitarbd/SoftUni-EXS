const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { getById, create, update, deleteById, addToSignUpList } = require('../services/courseBook');
const { isUser } = require('../middlewares/guards');
const { parseError } = require('../util');


const courseRouter = Router();

courseRouter.get('/create', isUser(), (req, res) => {
    res.render('create');
});

courseRouter.post('/create', isUser(),
    body('title').trim().isLength({ min: 5}),
    body('type').trim().isLength({ min: 3}),
    body('certificate').trim().isLength({ min: 2}),
    body('image').trim().isURL({ require_tld: false, require_protocol: true}),
    body('description').trim().isLength({ min: 10}),
    body('price').trim().isInt({ min: 0}),
    
    async (req, res) => {
        const userId= req.user._id;

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

    courseRouter.get('/edit/:id', isUser(), async (req, res) => {
        const id = req.params.id;

        const course = await getById(id);

        if (!course) {
            res.status(404).render('404')
            return;
        }

        if (course.owner.toString() != req.user._id) {
            res.redirect('/login');
        }

        res.render('edit', { data: course });
    });
    
    courseRouter.post('/edit/:productId', isUser(),
        body('brand').trim().isLength({ min: 2}),
        body('model').trim().isLength({ min: 5}),
        body('hardDisk').trim().isLength({ min: 5}),
        body('screenSize').trim().isLength({ min: 1}),
        body('ram').trim().isLength({ min: 2}),
        body('operatingSystem').trim().isLength({ min: 5, max: 20}),
        body('cpu').trim().isLength({ min: 10, max: 50 }),
        body('gpu').trim().isLength({ min: 10, max: 50}),
        body('price').trim().isNumeric({ min: 0 }),
        body('color').trim().isLength({ min: 2, max: 10}),
        body('weight').trim().isLength({ min: 1}),
        body('image').trim().isURL({ require_tld: false, require_protocol: true}),
        async (req, res) => {
            const courseId = req.params.productId;
            const userId= req.user._id;
    
            try {
                const validation = validationResult(req);
    
                if (validation.errors.length) {
                    throw validation.errors;
                }
                const result = await update(courseId, req.body, userId)
    
                res.redirect('/catalog/' + courseId);
            } catch (err) {
                res.render('edit', { data: req.body, errors: parseError(err).errors })
            }
        });

        courseRouter.get('/delete/:id', isUser(), async (req, res) => {
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

        courseRouter.get('/signup/:productId', isUser(), async (req, res) => {
            const courseId = req.params.productId;
            const userId= req.user._id;
    
            try {
                const result = await addToSignUpList(courseId, userId)
    
                res.redirect('/catalog/' + courseId);
            } catch (err) {
                res.render('/details', { errors: parseError(err).errors })
            }
        });

module.exports = { courseRouter }
