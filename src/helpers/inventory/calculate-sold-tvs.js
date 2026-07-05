import { inventory } from "../../constants/inventory.js";

function calculateTotalTvsSold() {
    let listTvsTotal = 0;
    for (let i = 0; i < inventory.length; i++) {
        listTvsTotal += inventory[i].sold;
    }

    console.log(listTvsTotal);
    return listTvsTotal;
}

export default calculateTotalTvsSold;

