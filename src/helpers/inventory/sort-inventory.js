import {inventory} from "../../constants/inventory.js";

export function sortByMostSold (products) {
    products.sort((a, b) => {
        return b.sold - a.sold
    });
    console.log(`meest verkocht: `, products);
}

export function sortByCheapest (products) {
    products.sort((a, b) => {
        return a.price - b.price
    });
    console.log(`goedkoop naar duur: `, products);
}

export function sortBySuitableForSports (products) {
    products.sort((a, b) => {
        return b.refreshRate - a.refreshRate
    })
    console.log(`geschikt voor sport: `, products);
}

export function sortByLargestScreens(products) {
    products.sort((a, b) => {
        const largestA = a.availableSizes.sort((a, b) => b - a)[0];
        const largestB = b.availableSizes.sort((a, b) => b - a)[0];

        return largestB - largestA;
    });
    console.log("Grootste scherm eerst:", products);
}



