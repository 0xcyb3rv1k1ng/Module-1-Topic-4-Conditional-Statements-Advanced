function main(typeOfScreening, numOfRows, numOfColumns) {
    let Premiere = 0;
    let Normal = 0;
    let Discount = 0;
    Premiere = 12.00 * numOfRows * numOfColumns;
    Normal = 7.50 * numOfRows * numOfColumns;
    Discount = 5.00 * numOfRows * numOfColumns;
    if (typeOfScreening == "Premiere") {
        console.log(Premiere.toFixed(2) + " leva");
    } else if (typeOfScreening == "Normal") {
        console.log(Normal.toFixed(2) + " leva");
    } else if (typeOfScreening == "Discount") {
        console.log(Discount.toFixed(2) + " leva");
    }
}
main('Premiere', 27, 27);