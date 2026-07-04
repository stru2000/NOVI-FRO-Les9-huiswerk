import './tvCard.css';
// import { inventory } from "../constants/inventory.js";
import generateProductName from '../helpers/product/generate-product-name.js';
import generateProductPrice from '../helpers/product/generate-product-price.js';
import generateProductSize from '../helpers/product/generate-product-size.js';
import generateProductFeatures from '../helpers/product/generate-product-features.js';

function TvCard({ product }) {
    const combinedName = generateProductName(product);
    const combinedPrice = generateProductPrice(product);
    const combinedSize = generateProductSize(product);
    const features = generateProductFeatures(product);

    return (
        <article className="tv-card">
            <div className="tv-card__image-wrapper">
                <img
                    className="tv-card__image"
                    src={product.sourceImg}
                    alt="Afbeelding van het product"
                />
            </div>

            <div className="tv-card__content">
                <p className="tv-card__title">{combinedName}</p>
                <h3 className="tv-card__price">{combinedPrice}</h3>
                <p className="tv-card__sizes">{combinedSize}</p>

                <div className="tv-card__features">
                    {features.map((feature) => (
                        <span className="tv-card__feature" key={feature.name}>
                    <img src={feature.image} alt="" />
                            {feature.name}
                </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default TvCard;