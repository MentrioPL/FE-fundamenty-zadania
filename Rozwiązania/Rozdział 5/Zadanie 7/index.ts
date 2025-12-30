// Kod bazowy (zostaw nienaruszony):

const packagesBase = [
  { id: 1001, date: new Date("2025-01-10"), weight: 10 },
  { id: 1002, date: new Date("2024-12-01"), weight: 5 },
  { id: 1003, date: new Date("2025-02-15"), weight: 7 }
]

// Zadanie 1
const driver: Driver = {
  name: "Kamil",
  age: 32,
  isActive: true,
  region: "Central"
}

// Zadanie 2
interface Package {
  id: number
  weight: number
  destination: string
  priority: "standard" | "express"
  delivered: boolean
}

const package1: Package = {
  id: 200,
  weight: 12,
  destination: "Warszawa",
  priority: "express",
  delivered: false
}

// Zadanie 3
interface Driver {
  name: string
  age: number
  isActive: boolean
  region: string
}

// Zadanie 4
const packageCopy = Object.assign({}, package1)
package1.weight = 50

// Zadanie 5
const shipmentMap = new Map<number, Package>()
shipmentMap.set(package1.id, package1)
shipmentMap.set(201, {
  id: 201,
  weight: 5,
  destination: "Kraków",
  priority: "standard",
  delivered: false
})

const readPackage = shipmentMap.get(package1.id)

// Zadanie 6
const driverSet = new Set<string>()
driverSet.add("Kamil")
driverSet.add("Ola")
driverSet.add("Ola")
driverSet.add("Robert")

console.log(driverSet)

// Zadanie 7
const now = new Date()
const deliveryDate = new Date()
deliveryDate.setDate(now.getDate() + 3)

// Zadanie 8
interface DeliveryInfo {
  packageId: number
  driver: string
  plannedDate: Date
  delivered: boolean
}

const deliveryMap = new Map<number, DeliveryInfo>()

deliveryMap.set(1, {
  packageId: 201,
  driver: "Ola",
  plannedDate: new Date("2025-01-03"),
  delivered: false
})

deliveryMap.set(2, {
  packageId: 301,
  driver: "Robert",
  plannedDate: new Date("2025-02-10"),
  delivered: true
})

const d = deliveryMap.get(1)

// Zadanie 9
const activeDrivers = new Set(["Ola", "Magda", "Kamil"])
const backupDrivers = new Set(["Kamil", "Robert"])

const assignedDrivers = [...activeDrivers].filter((x) => backupDrivers.has(x))

const assignedInfo = {
  assignedCount: assignedDrivers.length,
  list: assignedDrivers
}

// Zadanie 10
interface PackageSummary {
  id: number
  label: string
  overdue: boolean
}

const today = new Date()

const summaryList: PackageSummary[] = packagesBase.map((paczka) => ({
  id: paczka.id,
  label: `Paczka #${paczka.id} (waga ${paczka.weight} kg)`,
  overdue: paczka.date < today
}))
