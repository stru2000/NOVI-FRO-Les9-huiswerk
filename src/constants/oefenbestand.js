import { inventory } from './inventory.js';

function showOutcomeInConsole() {
    const tvTypes = inventory.map((tv)=> tv.type );
    console.log(tvTypes);

    const soldOut = inventory.filter((tv)=> tv.originalStock - tv.sold === 0);
    console.log(soldOut);

    const specModel = inventory.find((tv)=> tv.type === 'NH3216SMART');
    console.log(specModel);

    const sportModelArray = inventory.map((tv)=> {
        return {
            name: tv.brand + " " + tv.name,
            suitable: tv.refreshRate >= 100
        }
    });
    console.log(sportModelArray);


    const wideModel = inventory.filter ((tv) => tv.availableSizes >= 65 )
    console.log(wideModel);

}

export default showOutcomeInConsole;