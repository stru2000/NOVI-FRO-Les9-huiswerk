import './Tiles.css';

function Tile({ description, amount, name }) {
    return (
        <article className={`tile ${name}`}>
            <h3>{description}</h3>
            <p>{amount}</p>
        </article>
    );
}

export default Tile;