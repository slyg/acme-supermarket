/// <reference path="./basket.d.ts" />

class Basket {
  items: Array<Basket.Item> = [];
  pricingRules: Array<any>;

  constructor(pricingRules = []) {
    this.pricingRules = pricingRules;
  }

  add(item: Basket.Item) {
    this.items.push(item);
    return this;
  }

  total() {
    return 0;
  }
}

export default Basket;
