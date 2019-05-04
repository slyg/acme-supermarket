import Basket from "./Basket";

describe("The Basket class", () => {
  describe("instance", () => {
    it("should return itself when adding an item", () => {
      const basket = new Basket();

      expect(basket.add({ code: "DOH", price: Infinity })).toBeInstanceOf(
        Basket
      );
    });

    it("should return 0 if no item is added", () => {
      const basket = new Basket();

      expect(basket.total()).toBe(0);
    });

    it("should apply the pricing rules when the total is requested", () => {
      const sum: Basket.Rule = (acc, item) => ({
        ...acc,
        amount: acc.amount + item.price
      });
      const rules = [sum, sum];
      const basket = new Basket(rules);
      const item = { code: "DOH", price: 1 };

      expect(
        basket
          .add(item)
          .add(item)
          .total()
      ).toBe(4);
    });

    it("should start the items list with a dumb product", () => {
      const rule: Basket.Rule = jest.fn(() => ({
        amount: 0
      }));
      const dumbProduct = { code: "@@init", price: 0 };
      const basket = new Basket([rule]);
      basket.total();
      expect(rule).toHaveBeenCalledWith(
        {
          amount: 0
        },
        dumbProduct,
        0,
        [dumbProduct]
      );
    });
  });
});
