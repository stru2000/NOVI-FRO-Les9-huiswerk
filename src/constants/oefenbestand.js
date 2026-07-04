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


    const wideModel = inventory.filter ((tv) =>
        tv.availableSizes.find((size)=> size  >= 65 ))
    console.log(wideModel);

    const featureAmbiLight = inventory.filter ((tv) =>
        tv.options.find((feature) => feature.name === 'ambiLight' && feature.applicable ===true ));
    console.log(featureAmbiLight)

    const mostSold = inventory.sort ((a,b) => b.sold - a.sold);
    console.log(mostSold[0]);

}

export default showOutcomeInConsole;