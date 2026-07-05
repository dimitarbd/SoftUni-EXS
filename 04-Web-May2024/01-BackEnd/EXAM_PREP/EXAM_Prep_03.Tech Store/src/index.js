const express = require('express');
const { configDatabase } = require('./config/configDatabase');
const { configHbs } = require('./config/configHbs');
const { configExpress } = require('./config/configExpress');
const { configRoutes } = require('./config/configRoutes');

const { register, login } = require('./services/user');
const { createToken, verifyToken } = require('./services/jwt');
const api = require('./services/techStore');

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
}

async function test() {
    try {
        // REGISTER
        // const result = await register('john@abv.bg', 'John', '123');
        // const token = createToken(result);
        // console.log(token);

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AYWJ2LmJnIiwibmFtZSI6IkpvIiwiX2lkIjoiNjc0YjVjY2UxZjg1NDU2ZDFiNjNhNzExIiwiaWF0IjoxNzMyOTkyMjA2LCJleHAiOjE3MzMwNzg2MDZ9.GIuSB48D9PbuJ4eO9y2n5luyeqZBB5z-7fxR2YaNiWM'
        // const parsed = verifyToken(token)
        // console.log(parsed);

        //LOGIN
        // const result = await login('john@abv.bg', '123');
        // const token = createToken(result);
        // console.log(token);

        // CREATE RECORD
        // const result = await api.create({
        //     brand: 'ASUS',
        //     model: 'X515 A516KA',
        //     hardDisk: '512GB SSD',
        //     screenSize: '15.6 inches',
        //     ram: '16GB',
        //     operatingSystem: 'Windows 10',
        //     cpu: 'Intel® Celeron® N4500',
        //     gpu: 'Intel® UHD Graphics',
        //     price: 479,
        //     color: 'Gray',
        //     weight: '2.3kg',
        //     image: 'https://s13emagst.akamaized.net/products/64569/64568941/images/res_ac4397f66b6bf611b6fc061c57ca43c4.jpg?width=720&height=720&hash=598B793C3197B9217276CB79C2937E80',
        // }, '674b4fc4a4cf9f4319bb53b7');
        // console.log(result);

        // const data = await api.getById('674b72597f13d36d07b9dc5e');
        // console.log(data);

        // EDIT RECORD
        // const dataId = '674b8197e3278f49bd3ddce0';
        // const userId = '674b4fc4a4cf9f4319bb53b7';
        // const formData = {
        //     brand: 'Acer',
        //     model: 'Nitro 5 AN515-58',
        //     hardDisk: '512GB SSD',
        //     screenSize: '15.6 inches',
        //     ram: '32GB',
        //     operatingSystem: 'Windows 10',
        //     cpu: 'Intel Core™ i5-12450H',
        //     gpu: 'NVIDIA GeForce RTX™ 3050',
        //     price: 1499,
        //     color: 'Black',
        //     weight: '2.5kg',
        //     image: 'https://s13emagst.akamaized.net/products/53590/53589192/images/res_790dbf4452932f219ec1268b12fc73a3.jpg?width=720&height=720&hash=933FA37D9229954034F5BBF01C2438FA',
        // }

        // const result = await api.update(dataId, formData, userId);
        // console.log(result);


        // DELETE RECORD
        // const dataId = '674b8197e3278f49bd3ddce0';
        // const userId = '674b4fc4a4cf9f4319bb53b7';

        // await api.deleteById(dataId, userId);

        //ADD TO LIST
        // const dataId = '674b8607e7eab82bd7b3ecd6';
        // const userId = '674b4fc4a4cf9f4319bb53b7';

        // const result = await api.addToPreferredList(dataId, userId);
        // console.log(result);

    } catch (err) {
        console.log('Caugth error!');
        console.error(err.message);
    }
}
