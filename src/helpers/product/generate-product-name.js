// import { bestSellingTv } from "../../constants/inventory.js";

function generateProductName(product) {
    const brand = product.brand;
    const name = product.name;
    const type = product.type;
    const combinedProductName = `${brand} ${type} - ${name}`;

    console.log(combinedProductName);
    return combinedProductName;
}

export default generateProductName;
