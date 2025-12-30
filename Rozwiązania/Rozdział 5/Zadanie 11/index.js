"use strict";
class Parcel {
    status = "created";
    cost;
    id;
    weight;
    destination;
    constructor(id, weight, destination, cost) {
        this.cost = cost;
        this.id = id;
        this.weight = weight;
        this.destination = destination;
    }
    setStatus(newStatus) {
        this.status = newStatus;
    }
    getStatus() {
        return this.status;
    }
    getInfo() {
        return `Paczka ${this.id} → ${this.destination}, waga: ${this.weight}kg, koszt: ${this.cost}zł`;
    }
}
class ExpressParcel extends Parcel {
    constructor(id, weight, destination) {
        const calculatedCost = weight * 1.6;
        super(id, weight, destination, calculatedCost);
    }
    getInfo() {
        return super.getInfo() + " (EXPRESS)";
    }
    track() {
        return `Śledzenie paczki EXPRESS ${this.id}: w drodze do ${this.destination}.`;
    }
    calculateDeliveryTime() {
        return "Dostawa w 1 dzień";
    }
}
class HeavyParcel extends Parcel {
    constructor(id, weight, destination) {
        const calculatedCost = weight * 2.4;
        super(id, weight, destination, calculatedCost);
    }
    isOverLimit() {
        return this.weight > 50;
    }
    calculateDeliveryTime() {
        if (this.weight > 70)
            return "Dostawa 4–5 dni";
        return "Dostawa 2–3 dni";
    }
}
const order1 = new ExpressParcel("XP-101", 12, "Poznań");
const order2 = new HeavyParcel("HP-550", 68, "Warszawa");
order1.setStatus("in-transit");
order2.setStatus("awaiting-pickup");
console.log(order1.getInfo(), order1.calculateDeliveryTime(), order1.track());
console.log(order2.getInfo(), order2.calculateDeliveryTime(), "Przekroczono limit?", order2.isOverLimit());
