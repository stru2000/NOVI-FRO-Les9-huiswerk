import { inventory } from './inventory.js';

function showOutcomeInConsole() {
    const tvTypes = inventory.map((tv)=> tv.type );
    console.log(`TV Types:`,tvTypes);

    const soldOut = inventory.filter((tv)=> tv.originalStock - tv.sold === 0);
    console.log(`Uitverkocht:`,soldOut);

    const specModel = inventory.find((tv)=> tv.type === 'NH3216SMART');
    console.log(`Specs model NH3216SMART:`,specModel);

    const sportModelArray = inventory.map((tv)=> {
        return {
            name: tv.brand + " " + tv.name,
            suitable: tv.refreshRate >= 100
        }
    });
    console.log(`Geschikt om sport te kijken:`,sportModelArray);


    const wideModel = inventory.filter ((tv) =>
        tv.availableSizes.find((size)=> size  >= 65 ))
    console.log(`65 Inch of meer:`,wideModel);

    const featureAmbiLight = inventory.filter ((tv) =>
        tv.options.find((feature) => feature.name === 'ambiLight' && feature.applicable ===true ));
    console.log(`Heeft AmbiLight:`,featureAmbiLight)

    const mostSold = inventory.sort ((a,b) => b.sold - a.sold);
    console.log(`Best verkochte toestel:`,mostSold[0]);

    const largestScreen = inventory.map((tv) =>
        tv.availableSizes.sort((a,b)=> b - a)[0]);
    console.log(`Grootste scherm:`,largestScreen);

    //niet fool proof - niet gebruiken
    const largestScreenB = inventory.map((tv) =>
        tv.availableSizes[tv.availableSizes.length-1]);
    console.log(`Grootste scherm anders:`,largestScreenB);


}

export default showOutcomeInConsole;