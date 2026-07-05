const { Router } = require('express');

const { home, details, search } = require('../controllers/catalog');
const { about } = require('../controllers/about');
const { createGet, createPost, editGet, editPost } = require('../controllers/movie');
const { createGet: createCastGet, createPost: createCastPost} = require('../controllers/cast');
const { notFound } = require('../controllers/404');
const { attachGet, attachPost } = require('../controllers/attach');
const { registerGet, registerPost, loginGet, loginPost, logout } = require('../controllers/user');
const { isGuest, isUser } = require('../middlewares/guards');

const router = Router();

router.get('/', home);
router.get('/about', about);
router.get('/search', search);

router.get('/details/:id', details);
router.get('/attach/:id', isUser(), attachGet);
router.get('/attach/:id', isUser(), attachPost);
router.get('/edit/:id', isUser(), editGet);
router.post('/edit/:id', isUser(), editPost);

router.get('/create/movie', isUser(), createGet);
router.post('/create/movie', isUser(), createPost);
router.get('/create/cast', isUser(), createCastGet);
router.post('/create/cast', isUser(), createCastPost);

router.get('/register', isGuest(), registerGet);
router.get('/register', isGuest(), registerPost);
router.get('/login', isGuest(), loginGet);
router.get('/login', isGuest(), loginGet);
router.post('/logout',  logout);


router.get('*', notFound);

module.exports = { router };