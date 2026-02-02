let itemName = "Toe Socks";
let unitCost = 5.7;
let currentStock = 15;
let reorderLevel = 18;
let targetStock = 75;
let weeklyDemand = 28;
let supplierLeadTimeWeeks = 2;

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

console.log("Item Name: " + itemName);
console.log("Weeks of cover: " + weeksOfCover.toFixed(2));
console.log("Reorder Now? " + reorderNow);
console.log("Recommended Reorder: " + reorderQuantity + " pairs of Toe Socks!");
console.log("Estimated Reorder Cost: $" + estimatedReorderCost.toFixed(2));