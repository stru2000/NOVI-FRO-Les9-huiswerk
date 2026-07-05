import { inventory } from "../../constants/inventory.js";

function calculateTotalTvsPurchased() {
    let listTvsTotal = 0;
    for (let i = 0; i < inventory.length; i++) {
        listTvsTotal += inventory[i].originalStock;
    }

    console.log(listTvsTotal);
    return listTvsTotal;
}

export default calculateTotalTvsPurchased;