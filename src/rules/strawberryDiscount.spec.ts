import strawberryDiscount from "./strawberryDiscount";

describe("The strawberryDiscount rule", () => {
  it("should sum up the discounts on strawberries", () => {
    const data = [
      { code: "@@init" },
      { code: "SR1", price: 2 },
      { code: "DOH", price: 2 },
      { code: "DOH", price: 2 },
      { code: "SR1", price: 2 },
      { code: "SR1", price: 2 },
      { code: "DOH", price: 2 }
    ];
    const reducer = strawberryDiscount();
    expect(data.reduce(reducer, {})).toMatchObject({ amount: -1.5 });
  });
});
