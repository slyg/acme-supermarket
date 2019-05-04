/// <reference path="./basket.d.ts" />

const sumAmounts = (
  acc: Basket.Price,
  result: Basket.RuleResult
): Basket.Price => acc + result.amount;

/*
 * This item is used to ease the accumulator initialisation
 * in the rules functions. The code value is inspired by redux :)
 */
const initialItem: Basket.Item = { code: "@@init", price: 0 };

/*
 * The Basket class keeps track of the basket items and the price
 * computation rules.
 *
 * It provides a simple api to add items and return the total price.
 */
class Basket {
  items: Array<Basket.Item> = [];
  pricingRules: Array<Basket.Rule>;

  /*
   * The Basket class is initialised with the list of pricing rules functions.
   * These functions are reduce functions, aka reducers.
   */
  constructor(pricingRules = []) {
    this.pricingRules = pricingRules;
  }

  /*
   * Appends the item to the items array and returns the
   * basket for ease of use (e.g. chaining)
   */
  add(item: Basket.Item) {
    this.items.push(item);
    return this;
  }

  /*
   * Applies the pricing rules to the items list and sums all their amounts
   *
   * i.e.:
   * - each rule reduces the item list to a single amount
   * - these rules' amounts are summed and reduced to a number
   *
   * Notice the dumb initial item `initialItem` used to ease the rules
   * accumulator initialisation.
   */
  total() {
    return this.pricingRules
      .map(rule => [initialItem, ...this.items].reduce(rule, { amount: 0 }))
      .reduce(sumAmounts, 0);
  }
}

export default Basket;
