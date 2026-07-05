// import { bestSellingTv } from "../../constants/inventory.js";

function generateProductPrice(product) {
    const price = product.price;
    const combinedPrice = `€${price},-`
    console.log(price)
    return combinedPrice;
}

export default generateProductPrice;