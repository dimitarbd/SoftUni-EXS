const { Router } = require('express');

const { getMyPreferred, getMyCreatedDevices, getUserName } = require('../services/techStore');
const { isUser } = require('../middlewares/guards');
const { User } = require('../models/User');


const profileRouter = Router();

profileRouter.get('/profile', isUser(), async (req, res) => {
    const userId = req.user._id;
    const email = req.user.email;

    const { name } = await User.findOne({ 'email': email });

    const prefered = await getMyPreferred(userId);
    const created = await getMyCreatedDevices(userId);

    res.render('profile', { data: { email, name }, prefered, created });
});


module.exports = { profileRouter }