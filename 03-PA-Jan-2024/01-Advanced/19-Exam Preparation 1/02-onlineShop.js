class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = Number(warehouseSpace);
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        quantity = Number(quantity);
        spaceRequired = Number(spaceRequired);
        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.");
        } else {
            this.products.push({
                product: product,
                quantity: quantity
            })
            this.warehouseSpace -= spaceRequired;
            return `The ${product} has been successfully delivered in the warehouse.`
        }
    }

    quantityCheck(product, minimalQuantity) {
        minimalQuantity = Number(minimalQuantity);
        let data = this.products.filter(p => p.product == product)
        if (data.length == 0) {
            throw new Error(`There is no ${product} in the warehouse.`)
        } 
        
        if (minimalQuantity <= 0) {
            throw new Error (`The quantity cannot be zero or negative.`)
        };
        
        let qty = Number(data[0].quantity);
        
        if (minimalQuantity <= qty) {
            return `You have enough from product ${product}.`
        }

        let difference = minimalQuantity - qty;
        data[0].quantity = minimalQuantity;
        return `You added ${difference} more from the ${product} products.`
    }

    sellProduct(product) {
        let data = this.products.filter(p => p.product == product);

        if (data.length == 0) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        data[0].quantity--;

        this.sales.push({
            product: product,
            quantity: 1
        });
        return `The ${product} has been successfully sold.`
    }

    revision() {
        if (this.sales.length == 0) {
            throw new Error("There are no sales today!")
        }
        let revision = [`You sold ${this.sales.length} products today!`, "Products in the warehouse:"];

        for (let {product, quantity} of this.products) {
            revision.push(`${product}-${quantity} more left`)
        }

        return revision.join('\n');
    }

}


// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));


// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));


// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));


const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());