"use strict";
function calculateShippingCost(weight) {
    return weight * 2;
}
const formatPackageLabelResult = (clientName) => {
    return `Etykieta dla klienta: ${clientName}`;
};
function getDriverName() {
    return "Marek Kowalski";
}
function logPackageStatus(status) {
    console.log("Paczka odebrana z magazynu");
    console.log(`Status: ${status}`);
}
logPackageStatus("GOTOWA DO WYSYŁKI");
logPackageStatus("ODEBRANO OD NADAWCY");
logPackageStatus("DOSTARCZONO");
function scheduleDelivery(day, urgent) {
    return urgent
        ? `Dostawa zaplanowana na ${day} (PRIORYTET)`
        : `Dostawa zaplanowana na ${day}`;
}
function assignPackage(driver, packageId = "UNKNOWN") {
    console.log(`Paczka ${packageId} została przydzielona do kierowcy: ${driver}`);
}
