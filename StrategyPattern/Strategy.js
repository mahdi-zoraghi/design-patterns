// https://en.wikipedia.org/wiki/Strategy_pattern

class UPS {
  constructor() {
    this.name = "UPS";
  }

  calculate() {
    return 25;
  }
}

class FedEx {
  constructor() {
    this.name = "FedEx";
  }

  calculate() {
    return 30;
  }
}

class DHL {
  constructor() {
    this.name = "DHL";
  }

  calculate() {
    return 50;
  }
}

class Shipping {
  setStrategy(company) {
    this.company = company;
  }

  calculate() {
    return this.company.calculate();
  }
}

const packageDelivery = { from: "76712", to: "10012", weight: "1kg" };

const shipping = new Shipping();

shipping.setStrategy(new UPS());
console.log("UPS Strategy:", shipping.calculate(packageDelivery));

shipping.setStrategy(new FedEx());
console.log("FedEx Strategy:", shipping.calculate(packageDelivery));

shipping.setStrategy(new DHL());
console.log("DHL Strategy:", shipping.calculate(packageDelivery));
