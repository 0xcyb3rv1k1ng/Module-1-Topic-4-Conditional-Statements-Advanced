function main(month, numOfDays) {
    var totalApt = 0;
    var totalStudio = 0;
    if (month === "May" || month === "October") {
        if (numOfDays < 7) {
            totalApt = 65 * numOfDays;
            totalStudio = 50 * numOfDays;
            console.log("Apartment: " + totalApt.toFixed(2) + " lv.");
            console.log("Studio: " + totalStudio.toFixed(2) + " lv.");
        } else if (numOfDays > 7 && numOfDays <= 14) {
            totalApt = 65 * numOfDays;
            totalStudio = ((50 - (50 * 0.05)) * numOfDays);
            console.log("Apartment: " + totalApt.toFixed(2) + " lv.");
            console.log("Studio: " + totalStudio.toFixed(2) + " lv.");
        } else if (numOfDays > 14) {
            totalApt = ((65 - (65 * 0.1)) * numOfDays);
            totalStudio = ((50 - (50 * 0.3)) * numOfDays);
            console.log("Apartment: " + totalApt.toFixed(2) + " lv.");
            console.log("Studio: " + totalStudio.toFixed(2) + " lv.");
        }
    }
    if (month === "June" || month === "September") {
        if (numOfDays <= 14) {
            totalApt = 68.70 * numOfDays;
            totalStudio = 75.20 * numOfDays;
            console.log("Apartment: " + totalApt.toFixed(2) + " lv.");
            console.log("Studio: " + totalStudio.toFixed(2) + " lv.");
        } else if (numOfDays > 14) {
            totalApt = ((68.70 - (68.70 * 0.1)) * numOfDays);
            totalStudio = ((75.20 - (75.20 * 0.2)) * numOfDays);
            console.log("Apartment: " + totalApt.toFixed(2) + " lv.");
            console.log("Studio: " + totalStudio.toFixed(2) + " lv.");
        }
    }
    if (month === "July" || month === "August") {
        if (numOfDays <= 14) {
            totalApt = 77 * numOfDays;
            totalStudio = 76 * numOfDays;
            console.log("Apartment: " + totalApt.toFixed(2) + " lv.");
            console.log("Studio: " + totalStudio.toFixed(2) + " lv.");
        } else if (numOfDays > 14) {
            totalApt = ((77 - (77 * 0.1)) * numOfDays);
            totalStudio = 76 * numOfDays;
            console.log("Apartment: " + totalApt.toFixed(2) + " lv.");
            console.log("Studio: " + totalStudio.toFixed(2) + " lv.");
        }
    }
}
main('September', 143);