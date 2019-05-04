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
  });
});
