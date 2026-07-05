// import { bestSellingTv, inventory } from "../../constants/inventory.js";

function findMostSold(array)  {

    const sorteddMostSold = array.sort ((a,b) => b.sold - a.sold);
    return sorteddMostSold[0];
}

export default findMostSold;