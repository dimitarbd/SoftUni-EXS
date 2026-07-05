//TODO import routers

const { catalogRouter } = require('../controllers/catalog');
const { courseRouter } = require('../controllers/course');
const { homeRouter } = require('../controllers/home');
const { userRouter } = require('../controllers/userController');

function configRoutes(app) {
    app.use(homeRouter);
    app.use(userRouter);
    app.use(courseRouter);
    app.use(catalogRouter);


    app.get('*', (req, res) => {
        res.render('404');
    });
}

module.exports = { configRoutes };