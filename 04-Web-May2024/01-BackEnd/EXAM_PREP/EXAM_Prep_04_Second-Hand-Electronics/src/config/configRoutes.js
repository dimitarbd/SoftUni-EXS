//TODO import routers

const { catalogRouter } = require('../controllers/catalog');
const { productRouter } = require('../controllers/electronics');
const { homeRouter } = require('../controllers/home');
const { userRouter } = require('../controllers/user');

function configRoutes(app) {
    app.use(homeRouter);
    app.use(userRouter);
    app.use(catalogRouter);
    app.use(productRouter);

    //TODO register routers
    app.get('*', (req, res) => {
        res.render('404');
    });
}

module.exports = { configRoutes };