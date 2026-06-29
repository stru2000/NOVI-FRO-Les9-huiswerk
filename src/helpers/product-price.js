import { bestSellingTv } from "../constants/inventory.js";

function generateProductPrice() {
    const price = bestSellingTv.price;
    const combinedPrice = `€${price},-`
    
    console.log(price)
    return combinedPrice;
}

export default generateProductPrice;