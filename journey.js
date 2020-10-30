function main(budget, season) {
    let tripCost = 0;
    let discount = 0;
    let stayPrice = 0;
    let roomPrice = 0;
    // Calculate the boat price variable
    /*
        switch(season) {
            case "Summer":
                {
                    stayPrice = budget * roomPrice;
                }
                break;
            case "Winter":
                {
                    stayPrice = budget * roomPrice;
                }
                break;
        }
    */
    //Calculate stay price based on budget
    if (budget <= 100 && season == "summer") {
        destination = "Bulgaria";
        typeOfHoliday = "Camp";
        tripCost = budget * 0.3;
        //stayPrice -= tripCost;
        console.log("Somewhere in " + destination);
        console.log(typeOfHoliday + " - " + tripCost.toFixed(2));
    } else if (budget <= 100 && season == "winter") {
        destination = "Bulgaria";
        typeOfHoliday = "Hotel";
        tripCost = budget * 0.7;
        //stayPrice -= tripCost;
        console.log("Somewhere in " + destination);
        console.log(typeOfHoliday + " - " + tripCost.toFixed(2));
    } else if (budget > 100 && budget <= 1000 && season == "summer") {
        destination = "Balkans";
        typeOfHoliday = "Camp";
        tripCost = budget * 0.4;
        //stayPrice -= tripCost;
        console.log("Somewhere in " + destination);
        console.log(typeOfHoliday + " - " + tripCost.toFixed(2));
    } else if (budget > 100 && budget <= 1000 && season == "winter") {
        destination = "Balkans";
        typeOfHoliday = "Hotel";
        tripCost = budget * 0.8;
        //stayPrice -= tripCost;
        console.log("Somewhere in " + destination);
        console.log(typeOfHoliday + " - " + tripCost.toFixed(2));
    } else if (budget > 1000 && season == "summer" || season == "winter") {
        destination = "Europe";
        typeOfHoliday = "Hotel";
        tripCost = budget * 0.9;
        //stayPrice -= tripCost;
        console.log("Somewhere in " + destination);
        console.log(typeOfHoliday + " - " + tripCost.toFixed(2));
    }
}
main(3239.62, 'winter');