const express = require('express');
const { configDatabase } = require('./config/configDatabase');
const { configHbs } = require('./config/configHbs');
const { configExpress } = require('./config/configExpress');
const { configRoutes } = require('./config/configRoutes');

const { register, login } = require('./services/user');
const { createToken, verifyToken } = require('./services/jwt');

const api = require('./services/recipe');
const { create } = require('express-handlebars');

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
            //Register user
            // const result = await register('test@abv.bg', 'Test', '123');
            // const token = createToken(result);
            // console.log(token);

            // Create Record
            // const result = await api.create({
            //     title: 'Spaghetti Carbonara',
            //     ingredients: '200g spaghetti / 100g pancetta / 2 large eggs / 50g pecorino cheese / 50g parmesan / Freshly ground black pepper / Salt / 2 cloves of garlic / 50g unsalted butter',
            //     instructions: 'Put a large saucepan of water on to boil. Finely chop the pancetta, having first removed any rind. Finely grate both cheeses and mix them together. Beat the eggs in a medium bowl, season with a little freshly grated black pepper and set everything aside. Add 1 tsp salt to the boiling water, add the spaghetti and when the water comes back to the boil, cook at a constant simmer, covered, for 10 minutes or until al dente. Squash 2 peeled plump garlic cloves with the blade of a knife, just to bruise it. While the spaghetti is cooking, fry the pancetta with the garlic. Keep the heat hot for a few minutes and when the pancetta is golden and crisp, discard the garlic. Take the pan off the heat and set aside. Save some of the pasta water and then drain the spaghetti and add it to the pancetta. Mix most of the cheese in with the eggs, keeping a small handful back for sprinkling over later. Quickly pour the eggs and cheese into the pasta, lifting up the spaghetti so it mixes easily. Use the reserved water to keep it saucy, if necessary. Serve immediately with a little sprinkling of the remaining cheese and a grating of black pepper.',
            //     description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
            //     image: 'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg',
            // }, '66780ee231f48168c34f8e29');

            // const data = await api.getAll();
            // console.log(data);

            // Edit Record
            // const dataId = '66781bb7a8c9ab31672e6712';
            // const formData = {
            //     title: 'Spaghetti Carbonaraaaaa',
            //     ingredients: '300g spaghetti / 100g pancetta / 2 large eggs / 50g pecorino cheese / 50g parmesan / Freshly ground black pepper / Salt / 2 cloves of garlic / 50g unsalted butter',
            //     instructions: 'Put a large saucepan of water on to boil. Finely chop the pancetta, having first removed any rind. Finely grate both cheeses and mix them together. Beat the eggs in a medium bowl, season with a little freshly grated black pepper and set everything aside. Add 1 tsp salt to the boiling water, add the spaghetti and when the water comes back to the boil, cook at a constant simmer, covered, for 10 minutes or until al dente. Squash 2 peeled plump garlic cloves with the blade of a knife, just to bruise it. While the spaghetti is cooking, fry the pancetta with the garlic. Keep the heat hot for a few minutes and when the pancetta is golden and crisp, discard the garlic. Take the pan off the heat and set aside. Save some of the pasta water and then drain the spaghetti and add it to the pancetta. Mix most of the cheese in with the eggs, keeping a small handful back for sprinkling over later. Quickly pour the eggs and cheese into the pasta, lifting up the spaghetti so it mixes easily. Use the reserved water to keep it saucy, if necessary. Serve immediately with a little sprinkling of the remaining cheese and a grating of black pepper.',
            //     description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
            //     image: 'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg'
                
            // };
            // const userId = '66780ee231f48168c34f8e29';

            // const result = await api.update(dataId, formData, userId);

            //Delete Record
            const userId = '66780ee231f48168c34f8e29';
            const dataId = '66781bb7a8c9ab31672e6712';

            await api.deleteById(dataId, userId);

            //ADD Recommend
            
            // const userId = '667689c96d2ac4e489d6bdab';
            // const dataId = '6676c6c1588f69b052978339';

            // const result = await api.addRecommend(dataId, userId);

            // console.log(result);

        } catch (err) {
            console.log('Caught error');
            console.error(err.message);
        }
    };
}

