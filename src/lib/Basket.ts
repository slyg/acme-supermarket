/// <reference path="./basket.d.ts" />

const sumAmounts = (
  acc: Basket.Price,
  result: Basket.RuleResult
): Basket.Price => acc + result.amount;

const initialItem: Basket.Item = { code: "@@init", price: 0 };

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
    return this.pricingRules
      .map(rule => [initialItem, ...this.items].reduce(rule, { amount: 0 }))
      .reduce(sumAmounts, 0);
  }
}

export default Basket;
