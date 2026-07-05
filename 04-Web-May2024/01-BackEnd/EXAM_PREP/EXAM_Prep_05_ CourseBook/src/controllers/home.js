const { Router } = require('express');
const { createToken } = require('../services/jwt');
const { login } = require('../services/user');
const { getRecent, getMySignUpList, getMyCreatedCourse, getByAuthorId } = require('../services/courseBook');
const { isUser } = require('../middlewares/guards');

const courseServices = require('../services/courseServices');

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const courses = await getRecent();

    res.render('home', { courses });
});

homeRouter.use('/profile', isUser(), async (req, res) => {
    const userId = req.user._id;

    const signUp = await getMySignUpList(userId);
    const created = await getByAuthorId(userId);
    const email = req.user.email;

    res.render('profile', { signUp, created, email });
});



module.exports = { homeRouter };