const express = require('express');
const { configDatabase } = require('./config/configDatabase');
const { configHbs } = require('./config/configHbs');
const { configExpress } = require('./config/configExpress');
const { configRoutes } = require('./config/configRoutes');

const { register, login } = require('./services/user');
const { createToken, verifyToken } = require('./services/jwt');
const api = require('./services/courseBook');


start();

async function start() {
    const app = express();

    await configDatabase();
    configHbs(app);
    configExpress(app);
    configRoutes(app);

    app.listen(3000, () => {
        console.log('Server started http://localhost:3000');
        test();
    });
}

async function test() {
    try {
        // REGISTER
        // const result = await register('john@abv.bg', 'John', '123');
        // const token = createToken(result);
        // console.log(token);

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AYWJ2LmJnIiwidXNlcm5hbWUiOiJKb2huIiwiX2lkIjoiNjc1NzVhY2EwOGRlMWU1ZDdlYmRiYmRkIiwiaWF0IjoxNzMzNzc4MTIyLCJleHAiOjE3MzM4NjQ1MjJ9.0AzUwTgVjsEst_tTPmF2mFEu2jeiIqWbLhm9wJuMtU4'
        // const parsed = verifyToken(token)
        // console.log(parsed);

        //LOGIN
        // const result = await login('john@abv.bg', '123');
        // const token = createToken(result);
        // console.log(token);

        // CREATE RECORD
        // const result = await api.create({
        //     title: 'Classroom Management Essentials',
        //     type: 'Management',
        //     certificate: 'Yes',
        //     image: 'https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475660_1280.jpg',
        //     description: 'Learn how to manage your classroom and spend more time teaching rather than disciplining',
        //     price: 25,
        // }, '67575a8354231b715df0a86d');
        // console.log(result);

        // const data = await api.getById('674b72597f13d36d07b9dc5e');
        // console.log(data);

        // EDIT RECORD
        // const dataId = '675898f6da23b7b32393a0c5';
        // const userId = '67575a8354231b715df0a86d';
        // const formData = {
        //     title: 'Classroom Management Essentials',
        //     type: 'Management',
        //     certificate: 'Yes',
        //     image: 'https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475660_1280.jpg',
        //     description: 'Learn how to manage your classroom and spend more time teaching rather than disciplining',
        //     price: 35,
        // }

        // const result = await api.update(dataId, formData, userId);
        // console.log(result);


        // DELETE RECORD
        // const dataId = '675895c1f18793c8bdca412f';
        // const userId = '67575a8354231b715df0a86d';

        // await api.deleteById(dataId, userId);

        //ADD TO LIST
        // const dataId = '675895c1f18793c8bdca412f';
        // const userId = '67575a8354231b715df0a86d';

        // const result = await api.addToSignUpList(dataId, userId);
        // console.log(result);

    } catch (err) {
        console.log('Caugth error!');
        console.error(err.message);
    }
}
