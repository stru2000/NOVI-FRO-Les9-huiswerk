import './BestSoldTv.css';
import { bestSellingTv } from "../constants/inventory.js";

function BestSoldTv({ combinedName, combinedPrice, combinedSize }) {
    return (
        <article className={`tile ${combinedName}`}>
            <span className="product-image">
                <img src={bestSellingTv.sourceImg} alt="Afbeelding van het product"/>
            </span>
            <span>
                <p>{combinedName}</p>
                <h3>{combinedPrice}</h3>
                <p>{combinedSize}</p>
            </span>
        </article>
    );
}

export default BestSoldTv;