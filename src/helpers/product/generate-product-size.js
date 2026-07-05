// import { bestSellingTv } from "../../constants/inventory.js";

function generateProductSize(product) {
    const sizes = product.availableSizes;
    const combinedSize = sizes
        .map(size => `${size} inch (${Math.round(size * 2.54)} cm)`)
        .join(" | ");
    console.log(combinedSize);
    return combinedSize;
}

export default generateProductSize;