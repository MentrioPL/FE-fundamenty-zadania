"use strict";
// Kod bazowy (zostaw nienaruszony):
const packagesBase = [
    { id: 1001, date: new Date("2025-01-10"), weight: 10 },
    { id: 1002, date: new Date("2024-12-01"), weight: 5 },
    { id: 1003, date: new Date("2025-02-15"), weight: 7 }
];
// Zadanie 1
const driver = {
    name: "Kamil",
    age: 32,
    isActive: true,
    region: "Central"
};
const package1 = {
    id: 200,
    weight: 12,
    destination: "Warszawa",
    priority: "express",
    delivered: false
};
// Zadanie 4
const packageCopy = Object.assign({}, package1);
package1.weight = 50;
// Zadanie 5
const shipmentMap = new Map();
shipmentMap.set(package1.id, package1);
shipmentMap.set(201, {
    id: 201,
    weight: 5,
    destination: "Kraków",
    priority: "standard",
    delivered: false
});
const readPackage = shipmentMap.get(package1.id);
// Zadanie 6
const driverSet = new Set();
driverSet.add("Kamil");
driverSet.add("Ola");
driverSet.add("Ola");
driverSet.add("Robert");
console.log(driverSet);
// Zadanie 7
const now = new Date();
const deliveryDate = new Date();
deliveryDate.setDate(now.getDate() + 3);
const deliveryMap = new Map();
deliveryMap.set(1, {
    packageId: 201,
    driver: "Ola",
    plannedDate: new Date("2025-01-03"),
    delivered: false
});
deliveryMap.set(2, {
    packageId: 301,
    driver: "Robert",
    plannedDate: new Date("2025-02-10"),
    delivered: true
});
const d = deliveryMap.get(1);
// Zadanie 9
const activeDrivers = new Set(["Ola", "Magda", "Kamil"]);
const backupDrivers = new Set(["Kamil", "Robert"]);
const assignedDrivers = [...activeDrivers].filter((x) => backupDrivers.has(x));
const assignedInfo = {
    assignedCount: assignedDrivers.length,
    list: assignedDrivers
};
const today = new Date();
const summaryList = packagesBase.map((paczka) => ({
    id: paczka.id,
    label: `Paczka #${paczka.id} (waga ${paczka.weight} kg)`,
    overdue: paczka.date < today
}));
