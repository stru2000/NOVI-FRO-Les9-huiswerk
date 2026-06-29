import calculateTotalTvsSold from "../helpers/sold-tvs.js";
import calculateTotalTvsPurchased from "../helpers/purchased-tvs.js";

function calculateTotalTvsUnsold() {
    const soldTvs = calculateTotalTvsSold();
    const purchasedTvs = calculateTotalTvsPurchased();

    const unsoldTvs = purchasedTvs - soldTvs;

    console.log(unsoldTvs);
    return unsoldTvs;
}

export default calculateTotalTvsUnsold;