interface Trackable {
  track(): string
}

abstract class Parcel {
  private status: string = "created"
  protected cost: number
  id: string
  weight: number
  destination: string

  constructor(id: string, weight: number, destination: string, cost: number) {
    this.cost = cost
    this.id = id
    this.weight = weight
    this.destination = destination
  }

  setStatus(newStatus: string) {
    this.status = newStatus
  }

  getStatus() {
    return this.status
  }

  getInfo(): string {
    return `Paczka ${this.id} → ${this.destination}, waga: ${this.weight}kg, koszt: ${this.cost}zł`
  }

  abstract calculateDeliveryTime(): string
}

class ExpressParcel extends Parcel implements Trackable {
  constructor(id: string, weight: number, destination: string) {
    const calculatedCost = weight * 1.6
    super(id, weight, destination, calculatedCost)
  }

  getInfo(): string {
    return super.getInfo() + " (EXPRESS)"
  }

  track() {
    return `Śledzenie paczki EXPRESS ${this.id}: w drodze do ${this.destination}.`
  }

  calculateDeliveryTime(): string {
    return "Dostawa w 1 dzień"
  }
}

class HeavyParcel extends Parcel {
  constructor(id: string, weight: number, destination: string) {
    const calculatedCost = weight * 2.4
    super(id, weight, destination, calculatedCost)
  }

  isOverLimit(): boolean {
    return this.weight > 50
  }

  calculateDeliveryTime(): string {
    if (this.weight > 70) return "Dostawa 4–5 dni"
    return "Dostawa 2–3 dni"
  }
}

const order1 = new ExpressParcel("XP-101", 12, "Poznań")
const order2 = new HeavyParcel("HP-550", 68, "Warszawa")

order1.setStatus("in-transit")
order2.setStatus("awaiting-pickup")

console.log(order1.getInfo(), order1.calculateDeliveryTime(), order1.track())
console.log(
  order2.getInfo(),
  order2.calculateDeliveryTime(),
  "Przekroczono limit?",
  order2.isOverLimit()
)
