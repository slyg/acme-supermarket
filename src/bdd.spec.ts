import Basket from "./lib/Basket";

import addAll from "./rules/addAll";
import twoTeaBagsForOne from "./rules/twoTeaBagsForOne";
import strawberryDiscount from "./rules/strawberryDiscount";

const lookupTable: Map<Basket.Code, Basket.Item> = new Map([
  ["FR1", { code: "FR1", name: "Fruit tea", price: 3.11 }],
  ["SR1", { code: "SR1", name: "Strawberries", price: 5.0 }],
  ["CF1", { code: "CF1", name: "Coffee", price: 11.23 }]
]);

const withLookup = ruleFactory => ruleFactory(lookupTable);

/*
 * Gives access to the products lookup table to all pricing rules
 */
const rules = [addAll, twoTeaBagsForOne, strawberryDiscount].map(withLookup);

describe("The basket sum", () => {
  const expectations = [
    ["FR1, SR1, FR1, CF1", 19.34],
    ["FR1, FR1", 3.11],
    ["SR1, SR1, FR1, SR1", 16.61]
  ];

  expectations.forEach(([sequence, result]: [string, number]) => {
    describe(`with the sequence ${sequence}`, () => {
      it(`should be ${result}`, () => {
        const basket = new Basket(rules);
        sequence.split(", ").forEach(code => basket.add(lookupTable.get(code)));
        expect(basket.total()).toBe(result);
      });
    });
  });
});
