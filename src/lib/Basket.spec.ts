import Basket from "./Basket";

describe("The Basket class", () => {
  describe("instance", () => {
    it("should return itself when adding an item", () => {
      const basket = new Basket();

      expect(basket.add()).toBeInstanceOf(Basket);
    });
  });
});
