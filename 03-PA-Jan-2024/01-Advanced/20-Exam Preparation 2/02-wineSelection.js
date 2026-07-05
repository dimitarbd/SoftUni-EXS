class WineSelection {
    constructor(space) {
        this.space = Number(space);
        this.wines = [];
        this.bill = 0;
    }
    reserveABottle(wineName, wineType, price) {
        price = Number(price);
        if (this.space <= this.wines.length) {
            throw new Error("Not enough space in the cellar.")
        } else {
            this.wines.push({
                wineName: wineName,
                wineType: wineType,
                price: price,
                paid: false
            })
            return `You reserved a bottle of ${wineName} ${wineType} wine.`
        }
    }

    payWineBottle(wineName, price) {
        price = Number(price);
        let data = this.wines.find(p => p.wineName == wineName);
        if (!data) {
            throw new Error(`${wineName} is not in the cellar.`)
        }
        if (data.paid == true) {
            throw new Error(`${wineName} has already been paid.`)
        }
        data.paid = true
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`
    }

    openBottle(wineName) {
        let data = this.wines.find(p => p.wineName == wineName);
        if (!data) {
            throw new Error(`The wine, you're looking for, is not found.`)
        }
        if (!data.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }
        this.wines = this.wines.filter(x => x.wineName !== wineName);
        return `You drank a bottle of ${wineName}.`
    }
    cellarRevision(wineType) {
        if (wineType) {
            let data = this.wines.find(p => p.wineType == wineType);
            if (!data) {
                throw new Error(`There is no ${wineType} in the cellar.`)
            }

            return `${data.wineName} > ${wineType} - ${data.paid ? "Has Paid" : "Not Paid"}.`
        }

        let buff = `You have space for ${this.space - this.wines.length} bottles more.\n`;
        buff += `You paid ${this.bill}$ for the wine.\n`
        this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName)).forEach(x => {
            buff += `${x.wineName} > ${x.wineType} - ${x.paid ? "Has Paid" : "Not Paid"}.\n`
        })
        return buff.trim();
    }
}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
// console.log(selection.cellarRevision('Rose'));

// const selection = new WineSelection(5)
// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
// selection.payWineBottle('Bodegas Godelia Mencía', 144);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// console.log(selection.cellarRevision());


let selection = new WineSelection(2)

console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose'));
console.log(selection.cellarRevision('Rose'));


// Unexpected error: expected 'Bodegas Godelia Mencía > Rose -  Not Paid.' to equal 'Bodegas Godelia Mencía > Rose - Not Paid.'
