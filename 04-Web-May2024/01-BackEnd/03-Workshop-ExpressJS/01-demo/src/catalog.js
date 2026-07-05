const { Router } = require('express');
const { countMiddleware } = require('./middleware/counter');

const catalogHtml= `
<h1>Catalog Page</h1>
<a href="/">Home</a>
<a href="/catalog">Catalog</a>
`;

const catalogRouter = Router();

catalogRouter.get('/', (req, res) => {
    res.send(catalogHtml);
});

catalogRouter.get('/:category/:productId', countMiddleware, (req, res) => {
    res.send(catalogHtml + `<h2>${req.params.category}</h2>` + `<p>Item ID ${req.params.productId}</p> `);
});

module.exports = { catalogRouter };