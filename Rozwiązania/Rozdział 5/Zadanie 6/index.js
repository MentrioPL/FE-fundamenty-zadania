"use strict";
const packageIds = [101, 102, 103, 107];
const driverNames = ["Kamil", "Ola", "Magda", "Robert"];
const driverNamesCopy = [...driverNames]; // Zadanie 0
for (let i = 0; i < 4; i++) {
    driverNamesCopy.pop();
}
const todayShipments = [
    { id: 201, weight: 12, priority: "standard" },
    { id: 202, weight: 5, priority: "express" },
    { id: 203, weight: 8, priority: "standard" },
    { id: 204, weight: 22, priority: "express" },
    { id: 205, weight: 4, priority: "standard" },
    { id: 206, weight: 11, priority: "express" }
];
const delayedShipments = [
    { id: 301, weight: 18, priority: "express" },
    { id: 302, weight: 3, priority: "standard" },
    { id: 303, weight: 7, priority: "express" },
    { id: 304, weight: 15, priority: "standard" },
    { id: 305, weight: 2, priority: "express" },
    { id: 306, weight: 20, priority: "standard" }
];
// ---------------------------------------------------
// Zadanie 1
// ---------------------------------------------------
const newPackageId = 150;
packageIds.unshift(newPackageId);
const removedPackage = packageIds.pop();
// ---------------------------------------------------
// Zadanie 2
// ---------------------------------------------------
const driversAsString = driverNames.join(", ");
// ---------------------------------------------------
// Zadanie 3
// ---------------------------------------------------
const allShipments = todayShipments.concat(delayedShipments);
// ---------------------------------------------------
// Zadanie 4
// ---------------------------------------------------
const foundMagda = driverNames.find((name) => name === "Magda");
// ---------------------------------------------------
// Zadanie 5
// ---------------------------------------------------
const has107 = packageIds.includes(107);
// ---------------------------------------------------
// Zadanie 6
// ---------------------------------------------------
const indexOfKamil = driverNames.indexOf("Kamil");
// ---------------------------------------------------
// Zadanie 7
// ---------------------------------------------------
const heavyShipments = allShipments.filter((shipment) => shipment.weight > 10);
// ---------------------------------------------------
// Zadanie 8
// ---------------------------------------------------
const shipmentLabels = allShipments.map((shipment) => `Paczka o ID ${shipment.id} waży ${shipment.weight} kg`);
// ---------------------------------------------------
// Zadanie 9
// ---------------------------------------------------
const warehouseMap2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];
const pickedPackage = warehouseMap2D[1][1];
// ---------------------------------------------------
// Zadanie 10
// ---------------------------------------------------
const functionSort = (a, b) => {
    return a.weight - b.weight;
};
const sortedExpress = allShipments
    .filter((s) => s.priority === "express")
    .sort(functionSort);
console.log(sortedExpress);
