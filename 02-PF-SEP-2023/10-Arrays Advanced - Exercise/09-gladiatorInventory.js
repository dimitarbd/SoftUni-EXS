function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');

    for (let tokens of arr) {
        let [action, stuff] = tokens.split(' ');

        switch (action) {
            case "Buy":
                if (inventory.indexOf(stuff) == -1) {
                    inventory.push(stuff);
                }
                break;
            case "Trash":
                let indexT = inventory.indexOf(stuff);
                if (indexT > - 1) {
                    inventory.splice(indexT, 1)
                }
                break;
            case "Repair":
                let indexR = inventory.indexOf(stuff);
                if (indexR > - 1) {
                    inventory.splice(indexR, 1);
                    inventory.push(stuff);
                }
                break;
            case "Upgrade":
                let [equipment, upgr] = stuff.split('-')
                let indexU = inventory.indexOf(equipment);
                let upgradeCommand = `${equipment}:${upgr}`
                if (indexU > - 1) {
                    inventory.splice(indexU + 1, 0, upgradeCommand);
                }
                break;
        }

    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);
console.log('================');
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);
