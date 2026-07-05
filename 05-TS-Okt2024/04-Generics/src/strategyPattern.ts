interface DeliveryStrategy {
    calculateCost(weight: number, distance: number): number;
}

class FedExStrategy implements DeliveryStrategy {
    calculateCost(weight: number, distance: number): number {
        return (weight * distance) ^ 2;
    };
}

class EcontStrategy implements DeliveryStrategy {
    calculateCost(weight: number, distance: number): number {
        return (weight * distance) / 100;
    };
}
class SpeedyStrategy implements DeliveryStrategy {
    calculateCost(weight: number, distance: number): number {
        return (weight *distance - 100) / 100;
    };
}

class DeliveryCalculationCost {
    private deliveryStrategy: DeliveryStrategy;

    constructor(deliveryStrategy: DeliveryStrategy) {
        this.deliveryStrategy = deliveryStrategy;
    }
    calculatedBasedOnStartegy(weight: number, distance: number): number {
        return this.deliveryStrategy.calculateCost(weight, distance)
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
console.log(fedEx.calculatedBasedOnStartegy(10, 100))