class FedExStrategy {
    calculateCost(weight, distance) {
        return (weight * distance) ^ 2;
    }
    ;
}
class EcontStrategy {
    calculateCost(weight, distance) {
        return (weight * distance) / 100;
    }
    ;
}
class SpeedyStrategy {
    calculateCost(weight, distance) {
        return (weight * distance - 100) / 100;
    }
    ;
}
class DeliveryCalculationCost {
    constructor(deliveryStrategy) {
        this.deliveryStrategy = deliveryStrategy;
    }
    calculatedBasedOnStartegy(weight, distance) {
        return this.deliveryStrategy.calculateCost(weight, distance);
    }
}
const fedExDelivery = new FedExStrategy();
const econtDelivery = new EcontStrategy();
const speedyDelivery = new SpeedyStrategy();
const econt = new DeliveryCalculationCost(econtDelivery);
console.log(econt.calculatedBasedOnStartegy(10, 100));
const speedy = new DeliveryCalculationCost(speedyDelivery);
console.log(speedy.calculatedBasedOnStartegy(10, 100));
const fedEx = new DeliveryCalculationCost(fedExDelivery);
console.log(fedEx.calculatedBasedOnStartegy(10, 100));
