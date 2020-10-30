function main(budget, season, groupSize) {
    let boatPrice = 0;
    let discount = 0;
    let extraDiscount = 0;
    // Calculate the boat price variable
    switch (season) {
        case "Spring": {
            boatPrice = 3000;
        }
        break;
    case "Summer": {
        boatPrice = 4200;
    }
    break;
    case "Autumn": {
        boatPrice = 4200;
    }
    break;
    case "Winter": {
        boatPrice = 2600;
    }
    break;
    }
    //Calculate amount of discount based on the boat price
    if (groupSize === 6) {
        discount = boatPrice * 0.1;
    } else if (groupSize > 6 && groupSize < 12) {
        discount = boatPrice * 0.15;
    } else if (groupSize >= 12) {
        discount = boatPrice * 0.25;
    }
    // Apply the discount to the boat price.
    boatPrice -= discount;
    // See if the extra discount applies for even groups over 6 people, except in the Fall
    if (season != "Autumn" && groupSize > 5 && (groupSize % 2 === 0)) {
        extraDiscount = boatPrice * 0.05;
        boatPrice -= extraDiscount;
    }
    // Compare the budget and boat price.
    if (budget > boatPrice) {
        let remainingBudget = budget - boatPrice;
        console.log("Yes! You have " + remainingBudget.toFixed(2) + " leva left.");
    } else if (budget < boatPrice) {
        let neededBudget = boatPrice - budget;
        console.log("Not enough money! You need " + neededBudget.toFixed(2) + " leva.");
    }
}
main(7540, 'Summer', 15);