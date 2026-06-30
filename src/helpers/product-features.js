import { bestSellingTv } from "../constants/inventory.js";

function generateProductFeatures() {
    return bestSellingTv.options.map((feature) => {
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