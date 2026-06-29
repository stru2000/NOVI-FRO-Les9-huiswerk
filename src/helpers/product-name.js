import { bestSellingTv } from "../constants/inventory.js";

function generateProductName() {
    const brand = bestSellingTv.brand;
    const name = bestSellingTv.name;
    const type = bestSellingTv.type;
    const combinedProductName = `${brand} ${type} - ${name}`;

    console.log(combinedProductName);
    return combinedProductName;

}

export default generateProductName;
