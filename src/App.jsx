import './App.css';
import Tile from './components/Tiles.jsx';
import calculateTotalTvsSold from './helpers/sold-tvs';
import calculateTotalTvsPurchased from "./helpers/purchased-tvs.js";
import calculateTotalTvsUnsold from "./helpers/unsold-tvs.js";
import generateProductName from './helpers/product-name.js';
import generateProductPrice from './helpers/product-price.js';
import generateProductSize from './helpers/generate-size.js';
import BestSoldTv from "./components/BestSoldTv.jsx";

function App() {

  const sold = calculateTotalTvsSold();
  const purchased = calculateTotalTvsPurchased();
  const unsold = calculateTotalTvsUnsold();
  const productName = generateProductName();
  const productPrice = generateProductPrice();
  const productSize = generateProductSize();

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

      <BestSoldTv combinedName={productName} combinedPrice={productPrice} combinedSize={productSize} />


    </>
  )
}

export default App
