//TODO import routers

const { catalogRouter } = require('../controllers/catalog');
const { homeRouter } = require('../controllers/home');
const { userRouter } = require('../controllers/user');
const { recipeRouter } = require('../controllers/recipe');

function configRoutes(app) {
    app.use(homeRouter);
    app.use(catalogRouter);
    app.use(userRouter);
    app.use(recipeRouter);

    //TODO register routers

    app.get('*', (req, res) => {
        res.render('404');
    });
}

module.exports = { configRoutes };