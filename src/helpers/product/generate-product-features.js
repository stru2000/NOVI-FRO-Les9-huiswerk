// import { bestSellingTv } from "../../constants/inventory.js";

function generateProductFeatures(product) {
    return product.options.map((feature) => {
        if (feature.applicable) {
            return {
                name: feature.name,
                image: "/src/assets/check.png",
            };
        } else {
            return {
                name: feature.name,
                image: "/src/assets/minus.png",
            };
        }
    });
}

export default generateProductFeatures;