const { start: startSubscriber} = require('./subscriber.js');
const { start: startPublisher} = require('./publisher.js');

function start() {
    startSubscriber();
    startPublisher();
}

start();