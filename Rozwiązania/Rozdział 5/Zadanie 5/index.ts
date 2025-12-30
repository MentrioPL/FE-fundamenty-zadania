function calculateShippingCost(weight: number): number {
  return weight * 2
}

const formatPackageLabelResult = (clientName: string): string => {
  return `Etykieta dla klienta: ${clientName}`
}

function getDriverName(): string {
  return "Marek Kowalski"
}

function logPackageStatus(status: string): void {
  console.log("Paczka odebrana z magazynu")
  console.log(`Status: ${status}`)
}

logPackageStatus("GOTOWA DO WYSYŁKI")
logPackageStatus("ODEBRANO OD NADAWCY")
logPackageStatus("DOSTARCZONO")

function scheduleDelivery(day: string, urgent?: boolean): string {
  return urgent
    ? `Dostawa zaplanowana na ${day} (PRIORYTET)`
    : `Dostawa zaplanowana na ${day}`
}

function assignPackage(driver: string, packageId: string = "UNKNOWN"): void {
  console.log(`Paczka ${packageId} została przydzielona do kierowcy: ${driver}`)
}
