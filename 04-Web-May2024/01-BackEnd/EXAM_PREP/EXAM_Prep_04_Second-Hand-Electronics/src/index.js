const express = require('express');
const { configDatabase } = require('./config/configDatabase');
const { configHbs } = require('./config/configHbs');
const { configExpress } = require('./config/configExpress');
const { configRoutes } = require('./config/configRoutes');

const { register, login } = require('./services/user');
const { createToken, verifyToken } = require('./services/jwt');

const api = require('./services/electronics');


start();

async function start() {
    const app = express();

    await configDatabase();
    configHbs(app);
    configExpress(app);
    configRoutes(app);

    app.listen(3000, () => {
        console.log('Server started http://localhost:3000');
        // test();
    });

    async function test() {
        try {
            // REGISTER
            // const result = await register('john@abv.bg', 'John', '123');
            // const token = createToken(result);
            // console.log(token);

            // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBldGVyQGFidi5iZyIsIl9pZCI6IjY3NTQ3OGY1ZmM5OGI5NTBlYmVmNWFkMyIsImlhdCI6MTczMzU4OTIzNywiZXhwIjoxNzMzNjc1NjM3fQ.3dsOCDbRdWwUseVqq734_nT1to7Y25bOmfMPTIBry9E'
            // const parsed = verifyToken(token)
            // console.log(parsed);

            //LOGIN
            // const result = await login('john@abv.bg', '123');
            // const token = createToken(result);
            // console.log(token);

            // Create Record
            // const result = await api.create({
            //     name: 'HP EliteBook 820 G4',
            //     type: 'Laptop',
            //     damages: 'The product has minimal signs of use, not affecting its functionality.',
            //     image: '/image/laptop.webp',
            //     description: 'Intel Core i5-7200U (3M, 2.50 GHz, up to 3.10 GHz), 8GB DDR4, 256GB SSD, Intel HD Graphics 620, 12.5 inches (31.75 cm), 1366x768 HD',
            //     production: 2008,
            //     exploitation: 12,
            //     price: 153,
            // }, '675478f5fc98b950ebef5ad3');

            // const data = await api.getAll();
            // console.log(data);

            // Edit Record
            // const dataId = '67548f0dd4d69619a14d26a9';
            // const formData = {
            //     name: 'HP EliteBook 820 G4',
            //     type: 'Laptop',
            //     damages: 'The product has minimal signs of use, not affecting its functionality.',
            //     image: '/static/image/laptop.webp',
            //     description: 'Intel Core i5-7200U (3M, 2.50 GHz, up to 3.10 GHz), 8GB DDR4, 256GB SSD, Intel HD Graphics 620, 12.5 inches (31.75 cm), 1366x768 HD',
            //     production: 2008,
            //     exploitation: 12,
            //     price: 250,
            // };
            // const userId = '675478f5fc98b950ebef5ad3';

            // const result = await api.update(dataId, formData, userId);

            //Delete Record
            // const userId = '675478f5fc98b950ebef5ad3';
            // const dataId = '67548d12e9d81e515b1f16e3';

            // await api.deleteById(dataId, userId);

            //ADD Vote

            // const userId = '667689c96d2ac4e489d6bdab';
            // const dataId = '6676c6c1588f69b052978339';

            // const result = await api.addVote(dataId, userId);

            // console.log(result);

        } catch (err) {
            console.log('Caught error');
            console.error(err.message);
        }
    };
}

