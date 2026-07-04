import './App.css';
import Tile from './components/Tiles.jsx';
import calculateTotalTvsSold from './helpers/inventory/calculate-sold-tvs.js';
import calculateTotalTvsPurchased from "./helpers/inventory/calculate-purchased-tvs.js";
import calculateTotalTvsUnsold from "./helpers/inventory/calculate-unsold-tvs.js";
import TvCard from "./components/tvCard.jsx";
import showOutcomeInConsole from './constants/oefenbestand.js';
import { inventory, bestSellingTv } from './constants/inventory.js';
import findMostSold from "./helpers/inventory/find-most-sold.js";

function App() {

const sold = calculateTotalTvsSold();
const purchased = calculateTotalTvsPurchased();
const unsold = calculateTotalTvsUnsold();

showOutcomeInConsole();

function handleClick(event) {
  console.log(event.target.textContent);
}

  return (
    <>
      <h1>Tech it easy dashboard</h1>

      <h2>Verkoopoverzicht</h2>

      <div className="tiles-wrapper">
        <Tile description="Aantal verkochte producten" amount={sold} name="sold"/>
        <Tile description="Aantal ingekochte producten" amount={purchased} name="purchased"/>
        <Tile description="Aantal te verkopen producten" amount={unsold} name="unsold"/>
      </div>

      <h2>Best verkochte TV</h2>

      <TvCard product={findMostSold(inventory)} />

      <h2>Alle tvs</h2>

      <div className="buttons-wrapper">
        <button onClick={handleClick}>Meest verkocht eerst</button>
        <button onClick={handleClick}>Goedkoopste eerst</button>
        <button onClick={handleClick}>Meest geschikt voor sport eerst</button>
      </div>

    <ul>
        {inventory.map((tv) => {
            return <li key={tv.type}>{tv.brand}</li>;
        })}
    </ul>
    </>
  )
}

export default App
