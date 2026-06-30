import './BestSoldTv.css';
import { bestSellingTv } from "../constants/inventory.js";

function BestSoldTv({ combinedName, combinedPrice, combinedSize, features }) {
    return (
        <article className="best-sold-tv">
            <div className="best-sold-tv__image-wrapper">
                <img
                    className="best-sold-tv__image"
                    src={bestSellingTv.sourceImg}
                    alt="Afbeelding van het product"
                />
            </div>

            <div className="best-sold-tv__content">
                <p className="best-sold-tv__title">{combinedName}</p>
                <h3 className="best-sold-tv__price">{combinedPrice}</h3>
                <p className="best-sold-tv__sizes">{combinedSize}</p>

                <div className="best-sold-tv__features">
                    {features.map((feature) => (
                        <span className="best-sold-tv__feature" key={feature.name}>
                            <img src={feature.image} alt="" />
                            {feature.name}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default BestSoldTv;